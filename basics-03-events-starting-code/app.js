const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      Name: "",
    };
  },
  methods: {
    submitForm() {
      event.preventDefault(); // to prevent the default behavior of the form submission, which is to refresh the page
      // we can also use the @submit.prevent directive in the form tag to prevent the default behavior of the form submission
      console.log("Submitted");
      // here after page refreshes, the data will be lost, so we need to prevent the default behavior of the form submission
    },
    setName(event, lastname) {
      this.Name = event.target.value + " " + lastname;
      console.log(this.Name);
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.Name = "";
    },
  },
});

app.mount("#events");
