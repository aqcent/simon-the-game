<template>
  <div class="board">
    <button @click="$emit('start', selectedDelay)">Start</button>
    <select v-model="selectedDelay">
      <option v-for="(option, index) in options" :key="index" :value="option.delay">{{option.title}}</option>
    </select>
    <span>
      Current level:{{ options.find(option => option.delay == currentDelay).title }}
    </span>
    <span>Round: <b>{{ round }}</b></span>
    <span v-if="status != null" :class="status">{{status}}</span>
  </div>
</template>

<script>
export default {
  name: "Board",
  props: {
    currentDelay: Number,
    round: Number,
    status: String,
  },
  data: function () {
    return {
      selectedDelay: 0.4,
      options: [
        { delay: 1.5, title: "Easy" },
        { delay: 1.0, title: "Normal" },
        { delay: 0.4, title: "Hard" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.board {
  max-width: 150px;
  min-width: 200px;
  height: 205px;
  padding: 20px 10px;
  margin-left: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  border: 1px solid;
  * {
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  span,
  button {
    padding: 10px;
  }

  b {
    margin: 0;
    padding: 0;
    display: inline;
  }

  .Fail,
  .Correct {
    color: white;
  }
  .Correct {
    background-color: rgb(0, 167, 97);
  }
  .Fail {
    background-color: rgb(196, 43, 16);
  }
}
@media (max-width: 400px) {
  .board {
    max-width: none;
    margin: 0;
    align-self: stretch;
  }
}
</style>
