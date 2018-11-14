<template>
    <div style="margin-left: 5%">
        <hr>
    <h1 class="who-tittle">Quienes Somos<img :src="'images/menu_sepro.png'"/></h1>

        <div >


                <h2 class="who-subtittle">Direccionamiento</h2>
                <div data-aos="flip-up"
                     data-aos-offset="10"
                     data-aos-delay="50"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-out"
                     data-aos-mirror="true"
                     data-aos-once="false"
                     data-aos-anchor-placement="top-center" class="dir-container">
                    <img :src="'images/mision.png'"/>
                    <lorem add="3-5s"></lorem>
                </div>
                <div  data-aos="flip-up"
                      data-aos-offset="10"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      data-aos-anchor-placement="top-center" class="dir-container">
                    <img :src="'images/vision.png'"/>
                    <p>Para el 2020 el grupo de investigación SEPRO proyecta ser el centro de investigaciones en logística más importante del país y de Latinoamérica, con ubicaciones en las zonas de mayor actividad logística; vinculando a grupos de investigación interdisciplinarios no sólo de la Universidad Nacional de Colombia sino también de otras universidades tanto nacionales como internacionales, que tengan avances importantes en temas relacionados con la administración de la cadena de suministro.</p>
                </div><br>
                <div class="trajectory-container">
                    <img :src="'images/trayectoria.png'"/>
                    <p>El grupo inició sus tareas investigativas en la Sede Palmira de la Universidad Nacional de Colombia, bajo el liderazgo del profesor Wilson Adarme Jaimes. Posteriormente, su alcance incorporó investigadores en las Sedes Bogotá y Orinoquía; se estableció su coordinación en la Sede Bogotá a partir del año 2006 con resultados investigativos a nivel nacional y académicos en la Facultad de Ingeniería, particularmente en el Departamento de Ingeniería de Sistemas e Industrial. El grupo de investigación es soporte del programa de Maestría en Ingeniería industrial creado en 2006 y del Doctorado en Industria y Organizaciones creado en 2010.</p>
                </div><br>


                <h2 class="who-subtittle">Lineas de investigación</h2>
                <img style="width: 90%" :src="'images/lineas_investigacion.png'"/>

        </div>
        <img :src="'images/investigadores.png'" style="width: 90%"/>
    </div>
</template>

<script>
    import LoremIpsum from 'vue-lorem-ipsum';

    export default {
        name: "Sepro-who",
        components:{
            'lorem': LoremIpsum
        }
    }
</script>

<style scoped>
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
    .who-tittle{
        color: #fab88a;
        text-align: end;
    }
    hr{
        border-top: #fab88a;
    }
    .who-tittle img{
        margin-left: 10px;
    }
    .who-subtittle{
        color: #f57215;
    }
    .dir-container{
        display: inline-table;
        width: 40%;
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
    }
    .trajectory-container img{
        width: 100%;
    }

    .research-lines{
        color: #000;
    }
    .vue-lorem{
        color: #000;
    }
</style>