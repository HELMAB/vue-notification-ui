<script>
import Vue from "vue";

export default Vue.extend({
  name: "ServeDev",
  methods: {
    notify() {
      this.$notification(
        "Good job!",
        "You clicked the button!",
        "info",
        async () => {
          console.log("Clicked notification");
        },
        "A minute ago"
      );
    },
  },
});
</script>

<template>
  <div id="app">
    <button @click="notify">Notify</button>
  </div>
</template>
