<template>
    <div  class="course-container">
        <img  @click="" :src="'images/pregrado.png'"/>
        <h2  @click="" >Logística</h2>
        <h2 class="date">2017 II</h2>
        <p><lorem add="5s"></lorem></p>
    </div>
</template>

<script>
    import LoremIpsum from 'vue-lorem-ipsum';
    export default {
        name: "undergraduate",
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
    .date{
        text-align: end;
        display: block;

        margin-top: -3vw;
    }

</style>