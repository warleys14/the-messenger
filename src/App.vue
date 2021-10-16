<template>
  <div>
   <!-- <Home /> -->
    <remaining-days />
  </div>
</template>

<script>
//import Home from './views/Home.vue';
import RemainingDays from './views/RemainingDays.vue';

export default {
  name: 'App',
  components: {
    //Home,
    RemainingDays
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0.5rem 2rem;
}

html{
  background-color: #242324;
}
</style>
