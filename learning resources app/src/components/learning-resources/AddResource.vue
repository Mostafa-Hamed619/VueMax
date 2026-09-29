<template>
    <base-card>
        <form @submit.prevent="submitResource">
            <div>
                <label for="title">Title</label>
                <input id="title" v-model="title" type="text" required>
            </div>
            <div>
                <label for="description">Description</label>
                <textarea id="description" v-model="description" rows="3" required></textarea>
            </div>
            <div>
                <label for="link">Link</label>
                <input id="link" v-model="link" type="url" required>
            </div>
            <base-button type="submit">Add Resource</base-button>
        </form>
    </base-card>
</template>

<script>
export default{
    emits:['resource-added'],
    data(){
        return {
            title:'',
            description:'',
            link:''
        }
    },
    methods:{
        submitResource(){
            this.$emit('resource-added', {
                title:this.title,
                description:this.description,
                link:this.link
            })
            this.title = ''
            this.description = ''
            this.link = ''
        }
    }
}
</script>

<style scoped>
form {
  display: grid;
  gap: 1rem;
}

label {
  display: block;
  margin-bottom: 0.35rem;
  font-weight: 700;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  font: inherit;
}
</style>