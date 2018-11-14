<template>
    <div style="margin-left: 5%">

        <hr>
        <h1 class="what-tittle">
            <button v-scroll-to="'#sepro-what'" @click="swapComponent('mainwhat')">Atras</button>
            Qué hacemos<img :src="'images/menu_sepro.png'"/></h1>
        <div :is="currentComponent"></div>

       </div>
   </template>

   <script>
       import extensionProjects from "./what/extensionProjects";
       import investigationProjects from "./what/investigationProjects"
       import diplomats from "./what/diplomats";
       import mainwhat from "./what/main-what";
       import congresses from "./what/congresses"

       export default {
           name: "Sepro-what",

           components:{
               mainwhat,
               investigationProjects,
               extensionProjects,
               diplomats,
               congresses,
           },
           data() {
               return {
                   currentComponent: "mainwhat"
               };
           },
           methods: {
               swapComponent: function(component)
               {
                   this.currentComponent = component;
               }
           }
       }

   </script>

   <style scoped>
       button{
           color: #000;
           font-size: small;
       }
       .what-tittle{
           color: #df8c95;
           text-align: end;
       }
       .what-tittle img{
           margin-left: 10px;
       }
   </style>