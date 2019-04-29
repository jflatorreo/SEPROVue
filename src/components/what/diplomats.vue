<template>
    <div>
        <div  class="course-container">
            <img  @click="" :src="'images/diplomados.png'"/>

            <p>

                El grupo de investigación SEPRO, ha realizado hasta la fecha un total de 18 promociones del Diplomado en Logística y Gestión de la Cadena de Suministro. El público participante pertenece al sector público, privado y comunidad en general. A continuación se mencionan algunas de las entidades que han participado:
            </p><br><p>
            <ul style="list-style-type: initial">
            <li>Secretaría de Movilidad</li>
            <li> Transportes Sánchez Polo</li>
            <li> Universidad Nacional de Ingeniería del Perú</li>
            <li> Ministerio de Defensa</li>
            <li> Servicio Nacional de Aprendizaje (SENA)</li>
            <li> Cabildo Indígena KITE-KIWE</li>
            <li> Cabildo Indígena INTI-YAKU</li>
            </ul>
            </p>
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