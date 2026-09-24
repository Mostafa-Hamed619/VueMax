const app = Vue.createApp({
  data() {
    return {
      courseGoal: ["Finish the course", "Learn Vue", "Master Vue"],
      vueLink: "https://vuejs.org/",
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "<h1>Master Vue and build amazing apps!</h1>",
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue!";
      }
    },
    outputGoalChoice() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
