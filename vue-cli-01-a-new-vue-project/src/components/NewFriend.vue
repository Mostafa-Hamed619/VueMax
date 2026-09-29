<template>
 <form @submit.prevent="submitData">
    <div>
        <label>Name</label>
        <input type="text" v-model="enteredName">
    </div>

     <div>
        <label>Phone number</label>
        <input type="tel" v-model="enteredPhone">
    </div>

     <div>
        <label>email</label>
        <input type="email" v-model="enteredEmail">
    </div>

     <div>
        <button>Add Friend</button>
    </div>
 </form>
</template>
    

<script>
export default{
    emits:['add-contact'],
    data(){
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods:{
        submitData(){
            console.log(this.enteredName, this.enteredPhone, this.enteredEmail);
            this.$emit('add-contact',this.enteredName, this.enteredPhone, this.enteredEmail);
        }
    }
    
}

</script>