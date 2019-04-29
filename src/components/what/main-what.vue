<template>
<div>
    <div style="margin: auto; width: 80%;">
        <h1>Academia</h1>
            <div  class="what-container">
                <img  @click="swapComponent('undergraduate')" :src="'images/pregrado.png'"/>
                <h2  @click="swapComponent('undergraduate')" >Cursos de pregrado</h2>
                <p>Las asignaturas de pregrado relacionadas en esta sección son apoyadas por lo profesores investigadores del grupo y son de gran importancia para el fortalecimiento de la línea en logística. </p>
                <div class="more" v-scroll-to="'#sepro-what'" @click="swapComponent('undergraduate')"></div>
            </div>
            <div class="what-container">
                <img @click="swapComponent('postgraduate')" :src="'images/posgrado.png'"/>
                <h2 @click="swapComponent('postgraduate')">Cursos de posgrago</h2>
                <p>
                    Las asignaturas de posgrado relacionadas en esta sección son apoyadas por lo profesores investigadores del grupo y son de gran importancia para el fortalecimiento de la línea en logística.
                </p>
                <div class="more" v-scroll-to="'#sepro-what'" @click="swapComponent('postgraduate')"></div>
            </div>
    <!--    <div class="what-container">
            <img @click="swapComponent('contribution')" :src="'images/contribucion.png'"/>
            <h2 @click="swapComponent('contribution')">Contribución</h2>
            <p>
                El grupo de investigación SEPRO cuenta con clasificación B en Colciencias, con una contribución de más de 30 proyectos, 66 artículos en revistas especializadas, 4 libros y 10 capítulos de libro.


            </p>
            <a href="https://scienti.colciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000004504" target="_blank">
                <div class="more" ></div>
            </a>
        </div> -->

        <div class="what-container">
            <img @click="swapComponent('catedra')" :src="'images/catedra.png'"/>
            <h2 @click="swapComponent('catedra')">Catedra Internacional</h2>
            <p>
                Anualmente el grupo de investigación SEPRO ofrece un curso corto en el marco de la Cátedra Internacional de Ingeniería, la cual se realiza en el periodo intersemestral de cada año, realizando en el año 2018 la versión doceava.
            </p>
            <div class="more" v-scroll-to="'#sepro-what'" @click="swapComponent('catedra')"></div>
        </div>

        <div class="what-container">
            <img @click="swapComponent('seminars')" :src="'images/seminarios.png'"/>
            <h2 @click="swapComponent('seminars')">Seminarios</h2>
            <p>
                Con el propósito de presentar los diferentes tópicos de investigación que constantemente se desarrollan en el grupo de investigación en torno a la logística y la gestión de la cadena de suministro, como elemento base para la competitividad de las naciones y la calidad de vida de las personas; desde el año 2014 se realizan los seminarios de logística, desarrollando a la fecha la versión 17.
            </p>
            <div class="more" v-scroll-to="'#sepro-what'" @click="swapComponent('seminars')"></div>
        </div>
    </div>

    <div style="width: 80%;margin: auto">
        <h1>Proyectos</h1>
        <div class="what-container">
            <img    :src="current_invProjects"
            @mouseout="current_invProjects = dafault_invProjects"
            @mouseover="current_invProjects = over_invProjects"
            @click="current_invProjects = dafault_invProjects; swapComponent('investigationProjects')"
            style="width: 100%;cursor: copy"
            v-scroll-to="'#sepro-what'"/>
        </div>
        <div class="what-container">

            <img style="width: 100%" class="tittle-img" :src="current_extProjects"
                 @mouseout="current_extProjects = dafault_extProjects"
                 @mouseover="current_extProjects = over_extProjects"
                 @click="current_extProjects = dafault_extProjects; swapComponent('extensionProjects')"
                 v-scroll-to="'#sepro-what'"/>
        </div>
    </div>
    <div style="width: 80%;margin: auto">
    <h1>Educación Continua</h1>
    </div>
    <div class="ext-container">
        <div>
            <img class="tittle-img" :src="current_diplomats"
                 @mouseout="current_diplomats = dafault_diplomats"
                 @mouseover="current_diplomats = over_diplomats"
                 @click="current_diplomats = dafault_diplomats; swapComponent('diplomats')"
                 v-scroll-to="'#sepro-what'"/>
            <p>
                El grupo de investigación SEPRO, ha realizado hasta la fecha un total de 18 promociones del Diplomado en Logística y Gestión de la Cadena de Suministro. El público participante pertenece al sector público, privado y comunidad en general.
            </p>
        </div>
        <div>
            <img class="tittle-img"  :src="current_congresses"
                 @mouseout="current_congresses = dafault_congresses"
                 @mouseover="current_congresses = over_congresses"
                 @click="current_congresses = dafault_congresses; swapComponent('congresses')"
                 v-scroll-to="'#sepro-what'"/>
            <p>

                El Congreso Internacional Industria y Organizaciones, tuvo su primera versión en el año 2014, como iniciativa del Grupo de Investigación SEPRO de la Universidad Nacional de Colombia Sede Bogotá. La principal estrategia del evento consistió en vincular diferentes perspectivas en busca de la generación y transferencia de conocimiento, a partir de la divulgación de investigaciones e innovaciones validadas por los estudiantes pertenecientes a diferentes universidades y la industria, con especial participación de la Universidad Nacional de Colombia en su rol de universidad anfitriona.

            </p>
        </div>
    </div>}
</div>
</template>

<script>
    import LoremIpsum from 'vue-lorem-ipsum';
    export default {
        name: "main-what",
        data() {
            return {
                current_invProjects:"./images/proyectos_inv.png",
                dafault_invProjects:"./images/proyectos_inv.png",
                over_invProjects:"././images/proyectos_inv_hover.png",

                current_extProjects:"./images/proyectos_ext.png",
                dafault_extProjects:"./images/proyectos_ext.png",
                over_extProjects:"././images/proyectos_ext_hover.png",

                current_diplomats:"./images/diplomados.png",
                dafault_diplomats:"./images/diplomados.png",
                over_diplomats:"././images/diplomados_hover.png",

                current_congresses:"./images/congresos.png",
                dafault_congresses:"./images/congresos.png",
                over_congresses:"././images/congresos_hover.png"
            };
        },
        components:{
            'lorem': LoremIpsum
        },
        methods: {
            swapComponent: function(component)
            {
                this.$parent.currentComponent = "spinner";
                var parent = this.$parent;
                setTimeout(function(){
                    parent.currentComponent = component;
                }, 1200);
            }
        }
    }
</script>

<style scoped>


    hr{
        border-top: #df8c95;
    }

    h1{
        color: #df8c95;

    }

    .what-subtittle{
        color: #ed1c24;
        width: 90%;
        margin: auto;
        margin-bottom: 20px;
    }
    .what-container{
        display: inline-table;
        width: 50%;
        padding: 3%;
    }
    .what-container img{
        width: 39%;

        float: left;

        margin-right: 20px;

        cursor: copy;
    }
    .what-container p{
        color: #000;
        text-align: justify;
    }
    .what-container h2{
        text-align: end;
        color: #000000;
        cursor: copy;
        margin-bottom: 10px;
    }
    .more{
        float: right;
        background-image: url("../../assets/vermas.png");
        position: relative;
        min-height: 35px;

        min-width: 70px;

        background-size: contain;

        cursor: pointer;

        width: 9%;
        margin-top: 10px;
    }
    .more:hover{
        background-image: url("../../assets/vermas_hover.png");
    }
    .research-project{
        display: inline-grid;
        width: 20%;
        margin-right: 10%;
    }
    .research-project h2{
        color: #000;
        height: 10%;
    }
    .research-project p{
        color: #000;
        text-align: justify;
        height: 50%;
        margin-top: 10px;
    }
    .research-project img{
        max-height: 70px;
        margin-top: 10px;

    }
    .ext-container{
        width: 80%;
        margin: auto;
        text-align: center;
    }
    .ext-container div{
        display: inline-table;
        width: 33%;
        text-align: center;
    }
    .ext-container div p{
        color: #000;
        text-align: justify;
      /*  min-height: 200px; */
        margin: 20px;

    }
    .ext-container .tittle-img{
        width: 100%;
        height: 100%;
    }
    .ext-container div img{
        width: 90%;
        height: 100%;
        cursor: copy;
    }
@media screen and (max-width: 47.5em )  {
    .what-container{
        width: 100%;
    }
    .what-container h2{
        font-size: 6vw;
    }
    .more{
        min-height: 20px;

        min-width: 40px;
    }

}

</style>