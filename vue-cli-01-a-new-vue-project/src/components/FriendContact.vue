<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{detailsAvailable ? 'Hide': 'Show'}} Details</button>
        <ul v-if="detailsAvailable">
            <li><strong>Phone: </strong>{{friend.phone}}</li>
            <li><strong>Email: </strong>{{friend.email}}</li>
        </ul>
    </li>
</template>

<script>
export default{
    data(){return{
 detailsAvailable: false,
        friend:{
            id: 'manuel',
            name: 'Manuel Lorenz',
            phone: '0122 456 789',
            email: 'manuel@example.com'
        }
    }
       
    },
    methods: {
    toggleDetails(){
        this.detailsAvailable = !this.detailsAvailable
    }
}
}

</script>