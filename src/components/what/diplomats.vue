<template>
    <div>
        <div  class="course-container">
            <img  @click="" :src="'images/diplomados.png'"/>
            <h2 class="name" @click="" >Diplomado en logística y gestion de la cadena de abastecimiento</h2>
            <p><lorem add="5s"></lorem></p>
        </div>

    </div>
</template>

<script>
    import LoremIpsum from 'vue-lorem-ipsum';
    export default {
        name: "diplomats",
        components:{
            'lorem': LoremIpsum
        },
    }
</script>

<style scoped>

    .course-container{
        display: table;
        width: 80%;
        padding: 3%;
        margin: auto;
    }
    .course-container img{
        width: 39%;

        float: left;

        margin-right: 20px;

        cursor: copy;
    }
    .course-container p{
        color: #000;
        text-align: justify;
    }
    .course-container h2{

        color: #000000;
        cursor: copy;
        margin-bottom: 10px;
    }
    .name{

        max-width: 50%;
        display: inline-block;
        text-align: initial;
    }
    .date{
        text-align: end;
        display: block;

        margin-top: -3vw;
    }

</style>