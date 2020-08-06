<template>
  <div id="app">
    <Pad
      msg="Welcome to Your Vue.js App"
      :sequence="sequence"
      :needToPlaySequence="needToPlay"
      :delay="delay"
      :active="isPadActive"
      @padClick="checkUserSequence"
      @finishPlaySequence="finishPlaySequence"
      @loadComplete="preloadComplete"
    />
    <!-- <button @click="playSequence">play</button> -->
    <Board @start="startGame" :currentDelay="delay" :round="round" :status="status" />
  </div>
</template>

<script>
import Pad from "./components/Pad.vue";
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: {
    Pad,
    Board,
  },
  data: function () {
    return {
      round: 0,
      delay: 0.4,
      sequence: [],
      compareSequence: [],
      needToPlay: false,
      isPadActive: false,
      GameStatus: {
        Loading: "Loading",
        FreePad: "FreePad",
        Game: null,
        Fail: "Fail",
        Correct: "Correct",
      },
      status: "Loading",
    };
  },
  methods: {
    preloadComplete() {
      this.isPadActive = true;
      this.status = this.GameStatus.FreePad;
    },
    checkUserSequence(indexButton) {
      if (this.status == this.GameStatus.FreePad) return null;

      if (this.compareSequence.shift() !== indexButton) {
        this.isPadActive = false;
        this.status = this.GameStatus.Fail;
        setTimeout(() => this.endGame(), 3000);
      } else if (this.compareSequence.length === 0) {
        this.isPadActive = false;
        this.status = this.GameStatus.Correct;
        this.newRound();
      }
    },
    playSequence() {
      this.needToPlay = true;
      this.isPadActive = false;
    },
    finishPlaySequence() {
      this.needToPlay = false;
      this.isPadActive = true;
    },
    startGame(delay) {
      this.needToPlay = false;
      this.delay = delay;
      this.round = 0;
      this.sequence = [];
      this.status = this.GameStatus.Game;

      this.newRound();
    },
    endGame() {
      this.status = this.GameStatus.FreePad;
      this.isPadActive = true;
    },
    newRound() {
      this.round++;
      let newStep = Math.floor(Math.random() * 4);
      this.sequence.push(newStep);
      this.compareSequence = [...this.sequence];
      setTimeout(() => {
        this.playSequence(), (this.status = this.GameStatus.Game);
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 400px) {
  #app {
    flex-direction: column;
  }
}
</style>
