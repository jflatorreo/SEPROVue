<template>
    <div>
        <div  class="course-container">
            <img  @click="" :src="'images/posgrado.png'"/>
            <h2 class="name" @click="" >Catedra Internacional</h2>
            <h2 class="date">2019 I</h2>
            <p> Anualmente el grupo de investigación SEPRO ofrece un curso corto en el marco de la Cátedra Internacional de Ingeniería, la cual se realiza en el periodo intersemestral de cada año, realizando en el año 2018 la versión doceava. Estos cursos tienen como propósito acercar a los estudiantes en su mayoría de posgrados a las diferentes tendencias y perspectivas de la logística y la gestión de la cadena de suministro, en las líneas de investigación de la logística agroindustrial, urbana, humanitaria, institucional, redes de transporte y reverdecimiento, entre otras. Estos cuentan con la participación de docentes extranjeros de alta calidad académica provenientes de universidades internacionales, tales como; Ecole des Mines de Saint-Etienne, Instituto Politécnico Renssealer, Universidad Autónoma de Ciudad Juárez, Pontificia Universidad Catolica de Valparaiso y Universidad de California Davis; y docentes nacionales, la mayoría de la Universidad Nacional.
            </p>
        </div>
    </div>
</template>

<script>
    import LoremIpsum from 'vue-lorem-ipsum';
    export default {
        name: "seminars",
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

        max-width: 400px;
        display: inline-block;
        text-align: initial;
    }
    .date{
        text-align: end;
        display: block;

        margin-top: -3vw;
    }

</style>