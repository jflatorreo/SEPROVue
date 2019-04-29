<template>
    <div>
        <div  class="course-container">
            <img  @click="" :src="'images/pymes.png'"/>
            <h2 class="name" @click="" >Programa PYMES</h2>
            <p>
                Diseño metodológico sobre logística de almacenamiento, adquisición, apropiación de sistemas de información y comunicación para las pymes colombianas, subsector panificador.
                <br><br>Entidad Financiadora: Colciencias
                <br><br>Año: 2011

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/oncologicos.png'"/>
            <h2 class="name" @click="" >Medicamentos oncológicos</h2>
            <p>
                Propuesta metodológica para la definición de políticas reglas de negociación y coordinación en la gestión de abastecimiento de los medicamentos oncológicos en Colombia.
                <br><br>Entidad Financiadora: Colciencias
                <br><br>Año: 2011

            </p>
        </div>
  <!--      <div  class="course-container">
            <img  @click="" :src="'images/panificadoras.png'"/>
            <h2 class="name" @click="" >Panificadoras Palmira</h2>
            <p><lorem add="5s"></lorem></p>
        </div> -->


        <div  class="course-container">
            <img  @click="" :src="'images/pymes_colombia.png'"/>
            <h2 class="name" @click="" >MIPYMES Colombia</h2>
            <p>

                Propuesta Metodológica para la Gestión Logística de Abasto/Distribución y  Almacenamiento para las MIPYMES en Colombia.
                <br><br>Entidad Financiadora: Colciencias
                <br><br>Año: 2012

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/bienestarina.png'"/>
            <h2 class="name" @click="" >Bienestarina</h2>
            <p>

                Logística de acopio y distribución de Bienestarina en Colombia soportado en tecnologías de información y comunicación.
                <br><br>Entidad Financiadora: Colciencias
                <br><br>Año: 2013

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/cacao.png'"/>
            <h2 class="name" @click="" >Cacao y plátano Aráuca</h2>
            <p>

                Socialización y transferencia de los resultados del proyecto del proyecto propuesta metodológica para coordinar procesos logísticos de producción y distribución de cacao y plátano en las zonas de caricare y caño limón.
                <br><br>Entidad Financiadora: Universidad Nacional de Colombia
                <br><br>Año: 2014

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/pposgrados.png'"/>
            <h2 class="name" @click="" >Programa posgrados</h2>
            <p>

                Fortalecimiento de los programas de posgrados de maestría en ingeniería industrial a través del proyecto logística de acopio y distribución de Bienestarina en Colombia.
                <br><br>Entidad Financiadora: Universidad Nacional de Colombia
                <br><br>Año: 2014

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/cta.png'"/>
            <h2 class="name" @click="" >CTA</h2>
            <p>

                Diagnóstico del estado tecnológico y evaluación tecnológica y de procesos en el sistema operación logística y distribución en Cundinamarca.
                <br><br>Entidad contratante: Gobernación de Cundinamarca, Universidad Nacional de Colombia, Corpoica (Agrosavia), Alcaldía mayor de Bogotá.
                <br><br>Año: 2015

            </p>
        </div>
        <div  class="course-container">
            <img  @click="" :src="'images/fnc.png'"/>
            <h2 class="name" @click="" >Formando el nuevo campo</h2>
            <p>

                Formando al nuevo campo. Estrategias para la mejora de los canales de comercialización de productos agropecuarios en zonas de posconflicto por medio de la formación, investigación y transferencia tecnológica. Un enfoque desde la gestión de cadenas de suministro.
                <br><br>Entidad contratante: Ministerio de Educación Nacional.
                <br><br>Año: 2018

            </p>
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