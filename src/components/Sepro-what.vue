<template>
    <div style="margin-left: 5%">
        <hr>
        <h1 class="what-tittle">Qué hacemos<img :src="'images/menu_sepro.png'"/></h1>

        <div class="row">

            <br><br><br><br>
            <div class="column-left">
                <div class="what-container">
                    <img :src="'images/pregrado.png'"/>
                    <h2>Cursos de pregrado</h2>
                    <p><lorem add="5s"></lorem></p>
                </div><br>
            </div>
            <div class="column-right">
                <div class="what-container">
                    <img :src="'images/posgrado.png'"/>
                    <h2>Cursos de posgrago</h2>
                    <p><lorem add="5s"></lorem></p>
                </div><br>
            </div>
        </div>
        <h2 class="what-subtittle">Investigación</h2>
        <img :src="'images/proyectos_inv.png'" style="width: 90%"/>
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
                   <img class="tittle-img" :src="'images/proyectos_ext.png'"/>
                   <p><lorem add="3-5s"></lorem></p>
                   <img :src="'images/logo_proyecto.png'"/>
               </div>
               <div>
                   <img class="tittle-img" :src="'images/diplomados.png'"/>
                   <p><lorem add="3-5s"></lorem></p>
                   <img :src="'images/logo_proyecto.png'"/>
               </div>
               <div>
                   <img class="tittle-img" :src="'images/congresos.png'"/>
                   <p><lorem add="3-5s"></lorem></p>
                   <img width="90%" :src="'images/logo_proyecto.png'"/>
               </div>
           </div>
       </div>
   </template>

   <script>
       import LoremIpsum from 'vue-lorem-ipsum';

       export default {
           name: "Sepro-what",
           components:{
               'lorem': LoremIpsum
           }
       }
   </script>

   <style scoped>
       .row {
           display: flex;
           margin-bottom: 2%;
           padding-right: 10%;
       }

       .column-right {
           flex: 50%;
           padding-left:20px;
       }
       .column-left{
           flex: 50%;
           padding-right:20px;
           border-right: 1px solid #ed1c24;
       }
       hr{
           border-top: #df8c95;
       }
       .what-tittle{
           color: #df8c95;
           text-align: end;
       }
       .what-tittle img{
           margin-left: 10px;
       }
       .what-subtittle{
           color: #ed1c24;
       }
       .what-container img{
           width: 25%;
           float: left;
           margin-right: 3px;
       }
       .what-container p{
           color: #000;
           text-align: justify;
       }
       .what-container h2{
           text-align: end;
           color: #000000;
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
       }

   </style>