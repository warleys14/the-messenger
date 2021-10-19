<template>
    <div class="home-container">
        <Header/>
        <div class="info-container">
            <h1>{{ firstText }}</h1>
            <span>{{remainingsDays}}</span>
            <h1>{{ secondText }}</h1>
            <p class="quote">{{actualQuote.quote}}</p>
            <p>- {{actualQuote.author}} </p>
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
            actualQuote(){
                const quotes = [
                    {
                        quote: "O semestre mal começou e eu já estou pedindo misericórdia.",
                        author: "Barack Obama"    
                    },
                    
                    {
                        quote: "Impressionante que esse período não acaba. Help me to help you!",
                        author: "Albert Einstein"    
                    },

                    {
                        quote: "Eu só quero que o período acabe.",
                        author: "Clarice Lispector"    
                    },

                    {
                        quote: "Foi difícil chegar aonde eu cheguei, mas ainda não cheguei a lugar nenhum.",
                        author: "Lucas Silva"    
                    },

                    {
                        quote: "Só existe um caminho: se iludir com o final do período. Fé.",
                        author: "Machado de Assis"    
                    },

                    {
                        quote: "Não faço mais faculdade, agora só faço sucesso.",
                        author: "Tony Stark"    
                    },
                ]
                let quote = {}
                if(this.remainingsDays >= 60 && this.remainingsDays < 70){
                    quote = quotes[0]
                }
                else if(this.remainingsDays >= 45 && this.remainingsDays < 60){
                    quote = quotes[1]
                }
                else if(this.remainingsDays >= 30 && this.remainingsDays < 45){
                    quote = quotes[2]
                }
                else if(this.remainingsDays >= 15 && this.remainingsDays < 30){
                    quote = quotes[3]
                }
                else if(this.remainingsDays >= 1 && this.remainingsDays < 15){
                    quote = quotes[4]
                }
                else if(this.remainingsDays == 0){
                    quote = quotes[5]
                }
                return quote;
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
@import "../styles/_variables.scss";
@import "../styles/_base.scss";
    .home-container{
        height: 500px;
    }

    .info-container{
        @include flexbox(column);
        align-items: center;
        

        h1{
            color: white;
            text-align: center;
        }

        span{
            color: $primary-color;
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