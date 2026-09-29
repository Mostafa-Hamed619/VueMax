<template>
 <ul>
        <learning-resource v-for="res in resources"
         :key="res.id"
         :title="res.title"
         :description="res.description"
         :link="res.link" >
            
        </learning-resource>
    </ul>
    <p v-if="resources.length === 0" class="empty-state">No resources yet.</p>
</template>

<script>
import LearningResource from './LearningResource.vue'

export default{
    components:{LearningResource},
    inject:['resources'],
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

.empty-state {
    margin: auto;
    max-width: 40rem;
    text-align: center;
}
</style>