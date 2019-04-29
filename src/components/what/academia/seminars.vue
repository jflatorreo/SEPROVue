<template>
    <div>
        <div  class="course-container">
            <img  @click="" :src="'images/posgrado.png'"/>
            <h2 class="name" @click="" >Logística aplicada a inventarios y almacenamiento</h2>
            <h2 class="date">2018 II</h2>
            <p>  Actualmente, se desarrollan 4 sesiones durante el semestre; con una duración promedio de 3 horas; en las que se presentan los avances de investigación de los aspirantes a maestría y doctorado, y ponencias de expertos internacionales y nacionales en temas logísticos. Alguno de los expertos que han participado se muestra a continuación:
            </p><p><ul style="list-style: initial;list-style-position: inside">
            <li>José Holguín-Vera</li>
            <li> Wilson Adarme Jaimes</li>
            <li> Jesús González-Feliu</li>
            <li> Cara J Wong</li>
            <li> Coronel Carlos Alberto Henao</li>
            <li> Mario Huertas - Asesor estratégico Ministerio de Transporte</li>
                </ul></p><p>
                Estos seminarios cuentan con una participación promedio de 30 asistentes; los cuales pertenecen a los sectores de la industria, el gobierno y la academia.
                Las memorias del seminario 2018-II se encuentran a continuación:
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