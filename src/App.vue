<template>
  <div id="app">
    <Header/>
    <HomePresentation />
    <ButtonFooter :dialogFunction="changeDialogVisibility"/>
    <InfoDialog :visible="dialogVisible"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HomePresentation from './components/HomePresentation.vue';
import ButtonFooter from './components/ButtonFooter.vue';
import InfoDialog from './components/InfoDialog.vue';

export default {
  name: 'App',
  components: {
    Header,
    HomePresentation,
    ButtonFooter,
    InfoDialog,
  },
  computed:{
    dialogVisible(){
      return this.$store.state.dialogVisible //valor que está na store, e sua referência é acessada e retornada em hasSearchedUser, assim HomeUser ou HomeNotUser é renderizado
    }
  },
  methods:{
    changeDialogVisibility(){
      this.$store.commit('changeDialogVisibility');
    }
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
