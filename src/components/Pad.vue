<template>
  <div class="padWrapper">
    <div class="pad" :class="{disabled: !active}">
      <div
        class="padButton"
        :class="{active: sample.active}"
        v-for="(sample, index) in samples"
        :key="index"
        :style="{ backgroundColor: padColors[index]}"
        @click="pressPad(sample, index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Pad",
  props: {
    active: Boolean,
    delay: Number,
    sequence: Array,
    needToPlaySequence: Boolean,
  },
  data: function () {
    return {
      samples: [],
      sounds: ["/audio/1.mp3", "/audio/2.mp3", "/audio/3.mp3", "/audio/4.mp3"],
      padColors: ["#2c3e50", "#8e44ad", "#2980b9", "#16a085"],
    };
  },
  methods: {
    pressPad(sample, index) {
      if (!this.active) return null;
      this.playSound(sample);
      this.$emit("padClick", index);
    },
    playSound(sample) {
      sample.currentTime = 0;
      sample.play();
    },
    async playSequence(sequence, delay) {
      for (let step of sequence) {
        await new Promise((resolve) =>
          setTimeout(() => {
            (async () => {
              this.playSound(this.samples[step]);
              this.samples[step].active = true;
              await this.$forceUpdate();

              await new Promise((resolve) =>
                setTimeout(() => {
                  this.samples[step].active = false;
                  resolve();
                }, (delay * 1000) / 2)
              );
              this.$forceUpdate();
            })();
            resolve();
          }, delay * 1000)
        );
      }
      setTimeout(() => {
        this.$emit("finishPlaySequence");
      }, delay * 1000);
    },
    initAudioSamples() {
      this.sounds.forEach((sound) => {
        let sample = new Audio(sound);
        sample.addEventListener("canplaythrough", function foo() {
          sample.active = false;
          sample.removeEventListener("canplaythrough", foo);
        });
        this.samples.push(sample);
      });
    },
  },
  watch: {
    needToPlaySequence: function () {
      if (this.needToPlaySequence) this.playSequence(this.sequence, this.delay);
    },
  },
  created() {    
    this.initAudioSamples();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.padWrapper {
  display: inline-block;  
}
.pad {
  margin: 30px auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 200px;
  height: 200px;
  transition: all 0.3s;

  box-sizing: border-box;
  &.disabled {
    pointer-events: none;
    border: 4px solid rgba(0, 0, 0, 0.7);
  }
}
.padButton {
  transition: 0.2s;
  &:active,
  &.active {
    transform: scale(0.8);
  }
  &:hover,
  &.active {
    filter: brightness(130%);    
  }
}
</style>
