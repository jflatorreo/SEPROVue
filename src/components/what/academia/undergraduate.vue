<template>
    <div>
        <div class="course-container">
        <img  @click="" :src="'images/pregrado.png'"/>
        <h2  @click="" >Logística</h2>
        <h2 class="date">2019 I</h2>
        <p> </p>
        </div>

        <div class="course-container">
            <img  @click="" :src="'images/pregrado.png'"/>
            <h2  @click="" >Modelos y simulación</h2>
            <h2 class="date">2019 I</h2>
            <p> </p>
        </div>

        <div class="course-container">
            <img  @click="" :src="'images/pregrado.png'"/>
            <h2  @click="" >Optimización</h2>
            <h2 class="date">2019 I</h2>
            <p> </p>
        </div>

        <div class="course-container">
            <img  @click="" :src="'images/pregrado.png'"/>
            <h2  @click="" >Procesos estocásticos</h2>
            <h2 class="date">2019 I</h2>
            <p> </p>
        </div>

        <div class="course-container">
            <img  @click="" :src="'images/pregrado.png'"/>
            <h2  @click="" >Taller de simulación de procesos de manufactura y servicios</h2>
            <h2 class="date">2019 I</h2>
            <p> </p>
        </div>

        <div class="course-container">
            <img  @click="" :src="'images/pregrado.png'"/>
            <h2  @click="" >Teoría de la decisión</h2>
            <h2 class="date">2019 I</h2>
            <p> </p>
        </div>

        <div class="course-container">
            <img  @click="" :src="'images/pregrado.png'"/>
            <h2  @click="" >Taller de ingeniería de la producción</h2>
            <h2 class="date">2019 I</h2>
            <p> </p>
        </div>

        <div class="course-container">
            <img  @click="" :src="'images/pregrado.png'"/>
            <h2  @click="" >Taller de diseño de plantas </h2>
            <h2 class="date">2019 I</h2>
            <p> </p>
        </div>

        <div class="course-container">
            <img  @click="" :src="'images/pregrado.png'"/>
            <h2  @click="" >Taller de creatividad</h2>
            <h2 class="date">2019 I</h2>
            <p> </p>
        </div>
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