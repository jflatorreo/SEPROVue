<template>
    <div>
        <div>

            <div style="width: 90%;margin: auto">
                <h2 class="who-subtittle">Direccionamiento</h2>
                <div class="dir-container"><!-- data-aos="flip-up"
                     data-aos-offset="10"
                     data-aos-delay="50"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-out"
                     data-aos-mirror="true"
                     data-aos-once="false"
                     data-aos-anchor-placement="top-center" -->
                    <img :src="'images/mision.png'"/>
                    <p>SEPRO es un grupo de investigación en la línea de Supply Chain Managment - Logística de la Universidad Nacional de Colombia. Es un grupo multidisciplinar de profesionales con perfiles de doctorado y maestría. El grupo de investigación guía, formula y desarrolla proyectos de investigación y extensión acorde con las necesidades de la sociedad colombiana, predominando la generación de conocimiento alrededor de un beneficio común, un ambiente de sostenibilidad y productividad en un contexto local, regional e internacional. En adición, lo que busca el grupo de investigación es ser un vínculo entre el sector privado y el sector público para el fortalecimiento institucional.</p>
                </div>
                <div  class="dir-container"><!-- data-aos="flip-up"
                     data-aos-offset="10"
                     data-aos-delay="50"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-out"
                     data-aos-mirror="true"
                     data-aos-once="false"
                     data-aos-anchor-placement="top-center" -->
                    <img :src="'images/vision.png'"/>
                    <p>
                        Para el 2020 el grupo de investigación SEPRO proyecta ser el centro de investigaciones en logística más importante del país y de Latinoamérica, con ubicaciones en las zonas de mayor actividad logística; vinculando a grupos de investigación interdisciplinarios no sólo de la Universidad Nacional de Colombia sino también de otras universidades tanto nacionales como internacionales, que tengan avances importantes en temas relacionados con la administración de la cadena de suministro.
                    <div class="more" @click="toggleClass" v-if="!show"></div>

                        <a @click="toggleClass" v-if="show">Ocultar</a>
                        <transition name="fade">
                    <p v-if="show">
                            <br>Esta visión contempla la vinculación constante de estudiantes de posgrado de los programas afines con el tema central de investigación de SEPRO, dirigiendo sus trabajos de grado, dándoles participación en proyectos de investigación y extensión, y ofreciéndoles la oportunidad de profundizar en los aspectos de mayor interés por medio de estudios posteriores en instituciones del mundo.
                            <br><br>La vinculación de grupos internos de la universidad estará soportada por la participación activa de SEPRO en la Agenda de Conocimiento UN Desarrollo Organizacional, Económico e Industrial, en la que se establezcan las dinámicas de participación en proyectos multidisciplinarios, articulado con la creación del centro de investigaciones.
                            <br><br>El grupo SEPRO se proyecta en el fortalecimiento y puesta en marcha del Laboratorio de Logística, Movilidad y Transporte, el cual fue aprobado por el Consejo de Facultad en el 2011, de forma que pueda prestar un servicio a la comunidad académica e industrial, garantizando desarrollos de punta que permitan su auto sostenimiento.
                            <br><br>Dentro de la visión de SEPRO, en su incidencia en los programas de posgrado de la Facultad de Ingeniería, se encuentra la creación de la línea Logística y Gestión de la Cadena de Abastecimiento en la Maestría en Ingeniería Industrial, además de la creación de programas de postgrado en Logística y la consolidación de la línea de Logística en el Doctorado de Ingeniería, Industria y Organizaciones.

                    </p>
                        </transition>
                </div>
                <br><br>
            <div class="dir-container">
                <img :src="'images/trayectoria.png'"/>

                    <p>

                        El grupo inició sus tareas investigativas en la Sede Palmira de la Universidad Nacional de Colombia, bajo el liderazgo del profesor Wilson Adarme Jaimes. Posteriormente, su alcance incorporó investigadores en las Sedes Bogotá y Orinoquía; se estableció su coordinación en la Sede Bogotá a partir del año 2006 con resultados investigativos a nivel nacional y académicos en la Facultad de Ingeniería, particularmente en el Departamento de Ingeniería de Sistemas e Industrial. El grupo de investigación es soporte del programa de Maestría en Ingeniería industrial creado en 2006 y del Doctorado en Industria y Organizaciones creado en 2010.
                <div class="more" @click="toggleClass_t" v-if="!show_trajectory"></div>
                        <a @click="toggleClass_t" v-if="show_trajectory">Ocultar</a>
                        <transition name="fade">
                <p v-if="show_trajectory">
                        <br><br>A través del Grupo de investigación y durante los años en que estos programas han estado activos, los estudiantes de posgrado, además de desarrollar sus proyectos de grado en las líneas de investigación del grupo, especialmente en logística obedeciendo a ser el único grupo de la Sede Bogotá con esta línea de investigación, pueden adelantar actividades investigativas por medio de proyectos de extensión e investigación, recogiendo importantes experiencias y conocimiento que han sido visibles por medio de ponencias, eventos, artículos en revistas y participación en libros, además de acercarlos a las problemáticas del sector productivo. Esta dinámica hace más robusta la formación investigativa de los estudiantes de posgrado en Ingeniería, cuyo nivel protagónico en este campo es menor comparado con el que cuentan los estudiantes de otras áreas del conocimiento.
                        <br><br>En 2010, Colciencias aprobó dos proyectos y un programa de investigación, permitiendo que en los siguientes tres años el grupo facilite el desarrollo de las tesis de posgrado, no sólo con la financiación y disponibilidad de temáticas de alto interés sino también con la obtención de espacios físicos, materiales, equipos y bibliografía, creando un espacio de investigación más apropiado para el desarrollo de las capacidades de sus integrantes. De igual forma la extensión, por medio de proyectos con entidades como el Banco Interamericano de Desarrollo, Ministerio de Salud, Ministerio de Transporte, Ecopetrol y Cotecmar (en forma conjunta con el grupo GICO de la sede Medellín), ha soportado la actividad investigativa y la inmersión en las dinámicas industriales por parte de los estudiantes de posgrado.
                </p> </transition>

            </div>
                <div  class="dir-container">
                    <img :src="'images/contribucion.png'"/>
                    <p>

                        El grupo de investigación SEPRO cuenta con clasificación B en Colciencias, con una contribución de más de 30 proyectos, 66 artículos en revistas especializadas, 4 libros y 10 capítulos de libro.
                        <a target="_blank" href="https://scienti.colciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000004504"> Ingrese aquí a la página del GrupLAC</a>

                    </p>
                </div>
            </div>
            <br>


            <!--<h2 class="who-subtittle">Lineas de investigación</h2>-->



        </div>
        <div style="width: 90%; margin: auto">
            <img style="width: 100%" :src="'images/lineas_investigacion.png'"/>
            <img :src="currentImg_Researchers"
                 @mouseout="currentImg_Researchers = dafaultImage_Researchers"
                 @mouseover="currentImg_Researchers = overImage_Researchers"
                 @click="currentImg_Researchers = dafaultImage_Researchers; swapComponent('gallery')"
                 v-scroll-to="'#sepro-who'"
                 style="width: 100%"/>
        </div>
    </div>
</template>

<script>
    import LoremIpsum from 'vue-lorem-ipsum';

    export default {
        name: "who-main",
        data() {
            return {
                isActive:false,
                show: false,
                show_trajectory: false,
                currentImg_Researchers:"./images/investigadores.png",
                dafaultImage_Researchers:"./images/investigadores.png",
                overImage_Researchers:"./images/investigadores_hover.png"
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
            },
            toggleClass: function(){
                this.show = !this.show;
                this.isActive = !this.isActive;
            },
            toggleClass_t: function(){
                this.show_trajectory = !this.show_trajectory;
                this.isActive = !this.isActive;
            }
        }
    }
</script>

<style scoped>

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

    .fade-enter-active {
        transition: opacity 3s;
    }
    .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .bounce-enter-active {
        animation: bounce-in 0.7s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.8s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }


    .row {
        display: flex;
        margin-bottom: 2%;
    }

    .column-right {
        flex: 50%;
        padding-left:20px;
    }
    .column-left{
        flex: 50%;
        padding-right:20px;
        border-right: 1px solid #f57215;
    }

    .who-tittle img{
        margin-left: 10px;
    }
    .who-subtittle{
        color: #f57215;
    }
    .dir-container{
        display: inline-table;
        margin-right: 2%;
        width: 48%;
    }
    .dir-container img{
        width: 45%;
        float: left;
        margin-right: 3px;
    }
    .dir-container p, .trajectory-container p{
        color: #000;
        text-align: justify;
    }
    .trajectory-container{
        width: 90%;
        margin: auto;
    }
    .trajectory-container img{
        width: 100%;

    }
    .trajectory-container p{
        width: 60%;
        margin: auto;
        margin-top: 15px;
    }

    .research-lines{
        color: #000;
    }
    .vue-lorem{
        color: #000;
    }
    .inactive{
        cursor: copy;
    }
    .active{
        cursor: n-resize;
    }
</style>