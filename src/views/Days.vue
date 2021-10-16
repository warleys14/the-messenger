<template>
    <div class="home-container">
        <Header/>
        <div class="info-container">
            <h1>{{ firstText }}</h1>
            <span>{{remainingsDays}}</span>
            <h1>{{ secondText }}</h1>
            <p class="quote">”Só existe um caminho: se iludir com o final do período. Fé.”</p>
            <p>- Machado de Assis </p>
        </div>
        <button-footer
            firstButtonLabel="COMO FUNCIONA"
            :firstButtonFunction="changeDialogVisibility"
            lastButtonLabel="TELA INICIAL"
            lastButtonRouter="/"
        />
        <info-dialog :visible="dialogVisible"/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import ButtonFooter from '../components/ButtonFooter.vue';
    import InfoDialog from '../components/InfoDialog.vue';

    export default{
        name: "Days",
        components:{
            Header,
            ButtonFooter,
            InfoDialog
        },
        computed:{
            dialogVisible(){
                return this.$store.state.dialogVisible //valor que está na store, e sua referência é acessada e retornada em dialogVisible, assim o Dialog é renderizado
            },
            remainingsDays(){
                const todayDate = new Date();
                const mainDate = new Date("12/22/2021");
                const remainingsDays = parseInt((mainDate - todayDate) / (1000 * 60 * 60 * 24), 10);
                return remainingsDays
            },
            firstText(){
                return this.remainingsDays > 1 ? "Faltam" : "Falta"
            },
            secondText(){
                return this.remainingsDays > 1 ? "dias para o período acabar." : "dia para o período acabar." 
            },
            
        },

        methods:{
            changeDialogVisibility(){
            this.$store.commit('changeDialogVisibility');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-container{
        height: 500px;
    }

    .info-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        

        h1{
            color: white;
            text-align: center;
        }

        span{
            color: #FF725E;
            font-size: 10rem;
            font-weight: bolder;
            margin: 5rem 0 ;
        }
        .quote{
            margin: 1.4rem 0 0.2rem 0;
            text-align: center;
        }
        p{
            margin: 0.5rem 0 2rem 0;
            color: #fff;
            font-style: italic;
            font-size: 1rem;
        }   
    }
</style>