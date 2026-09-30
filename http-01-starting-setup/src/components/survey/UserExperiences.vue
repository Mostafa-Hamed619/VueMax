<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul v-if="isLoading">Waiting for data.....</ul>
      <ul v-if="!isLoading">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false
    }
  },
  components: {
    SurveyResult,
  },
  methods:{
    loadExperiences() {
      this.isLoading = true;
      fetch('https://vue-http-demo-2048a-default-rtdb.firebaseio.com/surveys.json').then(
        (response)=>{
       if(response.ok){
          return response.json();
       } 
      }).then((data)=>{
        this.isLoading = false;
        const results = [];
        for(const id in data){
          results.push({
            id : id,
            name: data[id].name,
            rating: data[id].rating
          })
        }
        this.results = results;
      });
      this.$emit('load-experiences');
    }
  },
  mounted(){ // OnInit in Angular
    this.loadExperiences();  // when the component is mounted and fully initialized
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>