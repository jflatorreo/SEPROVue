<template>
    <div>
        <div  class="course-container">
            <img  @click="" :src="'images/pymes.png'"/>
            <h2 class="name" @click="" >Programa PYMES</h2>
            <p><lorem add="5s"></lorem></p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/oncologicos.png'"/>
            <h2 class="name" @click="" >Medicamentos oncológicos</h2>
            <p><lorem add="5s"></lorem></p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/panificadoras.png'"/>
            <h2 class="name" @click="" >Panificadoras Palmira</h2>
            <p><lorem add="5s"></lorem></p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/cacao.png'"/>
            <h2 class="name" @click="" >Cacao y plátano Aráuca</h2>
            <p><lorem add="5s"></lorem></p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/cargue.png'"/>
            <h2 class="name" @click="" >Cargue y descargue Mercancias</h2>
            <p><lorem add="5s"></lorem></p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/cta.png'"/>
            <h2 class="name" @click="" >CTA</h2>
            <p><lorem add="5s"></lorem></p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/bienestarina.png'"/>
            <h2 class="name" @click="" >Bienestarina</h2>
            <p><lorem add="5s"></lorem></p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/fnc.png'"/>
            <h2 class="name" @click="" >Formando el nuevo campo</h2>
            <p><lorem add="5s"></lorem></p>
        </div>

    </div>
</template>

<script>
    import LoremIpsum from 'vue-lorem-ipsum';
    export default {
        name: "investigationProjects",
        components:{
            'lorem': LoremIpsum
        },
    }
</script>

<style scoped>

    .course-container{
        display: inline-table;
        width: 50%;
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


</style>