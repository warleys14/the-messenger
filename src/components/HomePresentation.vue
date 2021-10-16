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
    .presentation-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
            width: 510px;
            height: 330px;
        }

        h1{
            color: white;

            @media (max-width: 700px){
                font-size: 1.3rem;
            }
        }
    }
</style>