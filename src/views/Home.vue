<template>
    <div>
        <Header/>
        <HomePresentation />
        <ButtonFooter 
            :firstButtonFunction="changeDialogVisibility"
            firstButtonLabel="COMO FUNCIONA"
            lastButtonLabel="DIAS FALTANTES"
            lastButtonRouter="/days"
        />
        <InfoDialog :visible="dialogVisible"/>
  </div>
</template>


<script>

import Header from '../components/Header.vue';
import HomePresentation from '../components/HomePresentation.vue';
import ButtonFooter from '../components/ButtonFooter.vue';
import InfoDialog from '../components/InfoDialog.vue';

export default {
  name: 'Home',
  components: {
    Header,
    HomePresentation,
    ButtonFooter,
    InfoDialog,
  },
  computed:{
    dialogVisible(){
      return this.$store.state.dialogVisible //valor que está na store, e sua referência é acessada e retornada em dialogVisible, assim o Dialog é renderizado
    }
  },
  methods:{
    changeDialogVisibility(){
      this.$store.commit('changeDialogVisibility');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>