<template>
    <div class="presentation-container">
        <img src="../assets/tm-home.png" alt="The Messenger Ilustration"/>
        <h1>Olá, eu sou o TM. Como eu posso te ajudar?</h1>
    </div>
</template>


<script>
    export default{
        name: "HomePresentation"
    }
</script>

<style lang="scss" scoped>
@import "../styles/_base.scss";
    .presentation-container{
        @include flexbox(column);
        justify-content: center;
        align-items: center;

        img{
            width: 510px;
            height: 330px;

            @media (max-width: 700px){
                width: 350px;
                height: 230px;
            }
        }

        h1{
            color: white;
            text-align: center;

            @media (max-width: 700px){
                font-size: 1.3rem;
            }
        }
    }
</style>