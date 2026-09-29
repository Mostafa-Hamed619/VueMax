<template>
    <the-header title="RememberMe"></the-header>
   <the-resoures></the-resoures>
</template>


<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheResoures from './components/learning-resources/TheResoures.vue'

export default{
    components:{
        TheHeader,
        TheResoures
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>