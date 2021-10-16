<template>
    <div class="footer-container">
        <button type="button" @click="firstButtonFunction">
            {{ firstButtonLabel }}
        </button>
        <router-link :to="lastButtonRouter">
            <button class="router-button" type="button">
                {{ lastButtonLabel }}
            </button>
        </router-link>
        
    </div>
</template>

<script>
    export default{
        name: "ButtonFooter",
        props:{
            firstButtonLabel: {
                type: String,
                required: true
            },
            lastButtonLabel: {
                type: String,
                required: true
            },
            firstButtonFunction: {
                type: Function,
                required: true
            },
            lastButtonRouter: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin: 1rem;

        :first-child{
            background-color: transparent;
            color: #fff;
            border: #FF725E solid 2px;
            border-radius: 10px;
            height: 2.5rem;
            width: 25%; 
            font-weight: bolder;
            cursor: pointer;

            &:hover{
                background-color: #f88373;
            }

            @media (max-width: 700px){
                width: 40%;
            }
        }

        .router-button{
            border: none;
            background-color: #FF725E;
            color: #fff;
            font-weight: bolder;
            border-radius: 10px;
            height: 2.5rem;    
            width: 25vw;   
            cursor: pointer; 
            
            @media (max-width: 700px){
                width: 40vw;
            }
        }
    }
</style>