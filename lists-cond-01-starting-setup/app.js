const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeData(index){
      this.goals.splice(index,1)
    }
  },
});

app.mount("#user-goals");

if (true) {
}
