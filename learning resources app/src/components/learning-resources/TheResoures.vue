<template>
   <base-card>
        <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
   </base-card>  

    <component :is="selectedTab" @resource-added="addResource"></component>
</template>


<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default{
    components:{
        StoredResources,
        AddResource
    },
    data(){
        return {
            selectedTab:'stored-resources',
            resources:[]
        }
    },
    provide(){
        return{
            resources: this.resources
        }
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab
        },
        addResource(resource){
            this.resources.unshift({
                id: Date.now().toString(),
                ...resource
            })
            this.selectedTab = 'stored-resources'
        }
    }
}
</script>
