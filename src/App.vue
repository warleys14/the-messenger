<template>
  <div id="app">
    <Header/>
    <HomePresentation />
    <ButtonFooter/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HomePresentation from './components/HomePresentation.vue';
import ButtonFooter from './components/ButtonFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
    HomePresentation,
    ButtonFooter,
  }
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
