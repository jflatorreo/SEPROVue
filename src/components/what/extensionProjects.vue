<template>
    <div>
        <div  class="course-container">
            <img  @click="" :src="'images/vuce.png'"/>
            <h2 class="name" @click="" >VUCE</h2>
            <p>

                Diagnóstico de la situación actual de la logística en puertos y aeropuertos, para el diseño, desarrollo e implementación de un módulo de logística para importaciones y exportaciones en puertos y aeropuertos, para la Ventanilla Única de Comercio Exterior – VUCE.
                <br><br>Entidad Contratante: Ministerio de Comercio, Industria y Turismo
                <br><br>Año: 2012

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/medicamentos.png'"/>
            <h2 class="name" @click="" >Distribución Medicamentos</h2>
            <p>

                Propuesta para la definición de la operación logística a nivel estratégico y operativo de los (6) programas de salud en Colombia: malaria, tdb, leishmaniasis, dengue, enfermedades Chagas, biológicos.
                <br><br>Entidad Contratante: Ministerio de Salud y Protección Social
                <br><br>Año: 2012

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/caf.png'"/>
            <h2 class="name" @click="" >Evaluación de proyectos CAF</h2>
            <p>

                Evaluación especializada de los proyectos formulados como resultado del entregable 4 de la fase II del Plan de Logística Regional (Bogotá-Cundinamarca).
                <br><br>Entidad Contratante: Comunidad Andina de Fomento CAF
                <br><br>Año: 2013

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/cargue.png'"/>
            <h2 class="name" @click="" >Cargue y descargue en 10 zonas</h2>
            <p>

                Caracterización, Análisis, Diagnóstico, y Formulación de alternativas de gestión de las operaciones logísticas asociadas al cargue y descargue de mercancías en 10 zonas de Bogotá D.C.
                <br><br>Entidad Contratante: Secretaría de Movilidad
                <br><br>Año: 2013

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/politica.png'"/>
            <h2 class="name" @click="" >Política Pública</h2>
            <p>

                Formulación de lineamientos sobre políticas integrales para estructurar el sistema distrital de logística urbana de Bogotá D.C.
                <br><br>Entidad Contratante: Secretaría de Desarrollo Económico – Alcaldía Mayor de Bogotá
                <br><br>Año: 2013

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/homologa.png'"/>
            <h2 class="name" @click="" >Homologación Vehiculos</h2>
            <p>

                Prestación de servicios para la realización de una investigación que analice la operatividad de los requisitos técnicos de homologación de vehículos de carga y pasajeros.
                <br><br>Entidad Contratante: Ministerio de Transporte
                <br><br>Año: 2015

            </p>
        </div>
<!--        <div  class="course-container">
            <img  @click="" :src="'images/laboratorio.png'"/>
            <h2 class="name" @click="" >Laboratorio I.T.L</h2>
            <p><lorem add="5s"></lorem></p>
        </div> -->
        <div  class="course-container">
            <img  @click="" :src="'images/pml_buenaventura.png'"/>
            <h2 class="name" @click="" >PML Buenaventura</h2>
            <p>

                Plan de Movilidad de la Ciudad de Buenaventura. Fase I y II: Caracterización, Diagnóstico y Prospectiva de la Movilidad.
                <br><br>Entidad Contratante: Programa de las Naciones Unidas para el Desarrollo (PNUD) – Departamento Nacional de Planeación (DNP)
                <br><br>Año: 2015

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/pilotocyd.png'"/>
            <h2 class="name" @click="" >Piloto cargue y descargue nocturno</h2>
            <p>

                Propuesta para la puesta en marcha del piloto de cargue y descargue nocturno en dos unidades de planeamiento zonal (UPZ) de Bogotá.
                <br><br>Entidad Contratante: Invest in Bogotá
                <br><br>Año: 2015

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/pml.png'"/>
            <h2 class="name" @click="" >PML</h2>
            <p>

                Definición de insumos para la formulación del Plan maestro logístico PML para Colombia 
                <br><br>Entidad Contratante: Departamento Nacional de Planeación (DNP)
                <br><br>Año: 2016

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/pilotocyd_nal.png'"/>
            <h2 class="name" @click="" >Piloto cargue y descargue nocturno nacional</h2>
            <p>

                Desarrollo de un piloto en las ciudades de Buenaventura, Cali Medellín y Barranquilla el cual debe contener la evaluación de la implementación de cargue y descargue nocturno que evalúe el desempeño logístico, ambiental, la competitividad, la movilidad, la seguridad y las externalidades de la operación logística.
                <br><br>Entidad Contratante: Yooooooooooe
                <br><br>Año: 2017

            </p>
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