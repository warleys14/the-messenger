<template>
    <div class="header-container">
        <h2>The Messenger</h2>
    </div>
</template>

<script>
    export default{
        name: "Header"

    }
</script>

<style lang="scss" scoped>

    .header-container{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        padding: 0.5rem 2rem;

        h2{
            color: #FF725E
        }    
    }
    
</style>