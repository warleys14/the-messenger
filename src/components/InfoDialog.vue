<template>
    <div>
        <md-dialog :md-active="show">
            <md-dialog-title>Olá :)</md-dialog-title>
            <div class="confirm-dialog-body">
                <p>Eu sou o TM, um assistente virtual criado com o objetivo principal de dizer quantos dias faltam para o
                fim do período 2021.1 da UFPE. Devido à apreensão e anseio de alunos para que esse período acabe, 
                eu te ajudo dizendo quantos dias faltam para o período acabar, como também deixando uma frase cada
                vez mais motivadora à medida que o final do período se aproxima. </p>
            </div>

            <div class="confirm-dialog-action">
                <md-button class="md-accent md-raised" @click="onConfirm">Ok</md-button>
            </div>
            
        </md-dialog>
    </div>
</template>

<script>
    export default{
        name: "InfoDialog",
        data() {
            return {
                show: false,
            }
        },
        props:{
            visible:{
                type: Boolean,
                default: false
            }
                
        },
        methods:{
            onConfirm(){
                this.show = false;
                this.$store.state.dialogVisible = false;
            }
        },
        
        watch: {
            visible(value) {
                this.show = value
            }       
        }
    }
</script>

<style lang="scss">
    .md-dialog-container{
        background-color: #fff;
        width: 50%;
    }

    .confirm-dialog-body{
        margin: 0.8rem 1.7rem;
    }

    .confirm-dialog-action{
        width: 100%;
        display: flex;
        justify-content: flex-end;

        .md-accent{
            background-color: #FF725E;
            color: #fff;
        }
    }
</style>