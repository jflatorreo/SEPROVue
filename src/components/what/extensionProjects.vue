<template>
    <div>
        <div  class="course-container">
            <img  @click="" :src="'images/homologa.png'"/>
            <h2 class="name" @click="" >Homologación Vehiculos</h2>
            <p><lorem add="5s"></lorem></p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/politica.png'"/>
            <h2 class="name" @click="" >Política Pública</h2>
            <p><lorem add="5s"></lorem></p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/laboratorio.png'"/>
            <h2 class="name" @click="" >Laboratorio I.T.L</h2>
            <p><lorem add="5s"></lorem></p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/pml.png'"/>
            <h2 class="name" @click="" >PML</h2>
            <p><lorem add="5s"></lorem></p>
        </div>

    </div>
</template>

<script>
    import LoremIpsum from 'vue-lorem-ipsum';
    export default {
        name: "extensionProjects",
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