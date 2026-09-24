Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      const value = this.enteredValue.trim();
      if (!value) return;

      this.goals.push(value);
      this.enteredValue = "";
    },
  },
}).mount("#app"); // here to make the vue know which part in the page this methods and data will be applied to it.
