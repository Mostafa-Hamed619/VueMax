const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName:"",
    };
  },
  watch: {
    name(value) {
      if (value === "") {
        this.fullName = "None";
      } else {
        this.fullName = value + this.lastName;
      }
    },
    lastName(value){
      if (value === "") {
        this.fullName = "None";
      } else {
        this.fullName = this.name + value;
      }
    }
  },
  computed: {
    //   fullName() {
    //     if (this.name === "") {
    //       return "";
    //     }
    //     return this.name + " Schwarzmüller";
    //   },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
