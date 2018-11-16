<template>
<div>
    <div style="margin: auto; width: 80%;">
            <div  class="what-container">
                <img  @click="swapComponent('investigationProjects')" :src="'images/pregrado.png'"/>
                <h2  @click="swapComponent('investigationProjects')" >Cursos de pregrado</h2>
                <p><lorem add="5s"></lorem></p>
                <div class="more" v-scroll-to="'#sepro-what'" @click="swapComponent('investigationProjects')"></div>
            </div>
            <div class="what-container">
                <img @click="swapComponent('investigationProjects')" :src="'images/posgrado.png'"/>
                <h2 @click="swapComponent('investigationProjects')">Cursos de posgrago</h2>
                <p><lorem add="5s"></lorem></p>
                <div class="more" v-scroll-to="'#sepro-what'" @click="swapComponent('investigationProjects')"></div>
            </div>
        <div class="what-container">
            <img @click="swapComponent('investigationProjects')" :src="'images/contribucion.png'"/>
            <h2 @click="swapComponent('investigationProjects')">Contribución</h2>
            <p><lorem add="5s"></lorem></p>
            <div class="more" v-scroll-to="'#sepro-what'" @click="swapComponent('investigationProjects')"></div>
        </div>
        <div class="what-container">
            <img @click="swapComponent('investigationProjects')" :src="'images/seminarios.png'"/>
            <h2 @click="swapComponent('investigationProjects')">Seminarios</h2>
            <p><lorem add="5s"></lorem></p>
            <div class="more" v-scroll-to="'#sepro-what'" @click="swapComponent('investigationProjects')"></div>
        </div>
    </div>
    <h2 class="what-subtittle">Investigación</h2>
    <img    :src="current_invProjects"
            @mouseout="current_invProjects = dafault_invProjects"
            @mouseover="current_invProjects = over_invProjects"
            @click="current_invProjects = dafault_invProjects; swapComponent('investigationProjects')"
            style="width: 90%;cursor: copy"
            v-scroll-to="'#sepro-what'"/>
    <!--   <div>
           <div class="research-project">
               <h2>Nombre del proyecto</h2>
               <p><lorem add="3s"></lorem></p>
               <img :src="'images/logo_proyecto.png'"/>
           </div>
           <div class="research-project">
               <h2>Nombre del proyecto</h2>
               <p><lorem add="5s"></lorem></p>
               <img :src="'images/logo_proyecto.png'"/>
           </div>
       </div> -->
    <div class="ext-container">
        <h2 class="what-subtittle">Extensión</h2>
        <div>
            <img class="tittle-img" :src="current_extProjects"
                 @mouseout="current_extProjects = dafault_extProjects"
                 @mouseover="current_extProjects = over_extProjects"
                 @click="current_extProjects = dafault_extProjects; swapComponent('extensionProjects')"
                 v-scroll-to="'#sepro-what'"/>
            <p><lorem add="3-5s"></lorem></p>

        </div>
        <div>
            <img class="tittle-img" :src="current_diplomats"
                 @mouseout="current_diplomats = dafault_diplomats"
                 @mouseover="current_diplomats = over_diplomats"
                 @click="current_diplomats = dafault_diplomats; swapComponent('diplomats')"
                 v-scroll-to="'#sepro-what'"/>
            <p><lorem add="3-5s"></lorem></p>
        </div>
        <div>
            <img class="tittle-img"  :src="current_congresses"
                 @mouseout="current_congresses = dafault_congresses"
                 @mouseover="current_congresses = over_congresses"
                 @click="current_congresses = dafault_congresses; swapComponent('congresses')"
                 v-scroll-to="'#sepro-what'"/>
            <p><lorem add="3-5s"></lorem></p>
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

    .what-subtittle{
        color: #ed1c24;
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
    .vermas{
        float: right;
    }
    .more{
        float: right;
        background-image: url("../../assets/vermas.png");
        position: relative;
        height: 48px;
        width: 99px;
        background-size: cover;
        cursor: pointer;
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
        width: 90%;
    }
    .ext-container div{
        display: inline-table;
        width: 33%;
        text-align: center;
    }
    .ext-container div p{
        color: #000;
        text-align: justify;
        min-height: 200px;
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
</style>