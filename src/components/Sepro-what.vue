<template>
    <div >

        <hr>
        <h1 class="what-tittle">
            <img :src="currentImg"
                 @mouseout="currentImg = dafaultImage"
                 @mouseover="currentImg = overImage"
                 v-if="currentComponent!='mainwhat'"
                 v-scroll-to="'#sepro-what'"
                 @click="currentImg = dafaultImage; swapComponent('mainwhat')"/>
            Qué hacemos<img :src="'images/menu_sepro.png'"/></h1>
        <div :is="currentComponent"></div>

       </div>
   </template>

   <script>
       import postgraduate from "./what/academia/postgraduate";
       import undergraduate from "./what/academia/undergraduate";
       import congresses from "./what/congresses";
       import diplomats from "./what/diplomats";
       import extensionProjects from "./what/extensionProjects";
       import investigationProjects from "./what/investigationProjects"
       import mainwhat from "./what/main-what";


       import spinner from "./spinner";

       export default {
           name: "Sepro-what",

           components:{
               mainwhat,
               congresses,
               diplomats,
               extensionProjects,
               investigationProjects,
               postgraduate,
               undergraduate,
               spinner
           },
           data() {
               return {
                   currentComponent: "mainwhat",
                   currentImg: "./images/goback.png",
                   dafaultImage: "./images/goback.png",
                   overImage: "./images/goback_what.png"
               };
           },
           methods: {
               swapComponent: function(component)
               {
                   this.currentComponent = "spinner";
                   var self = this;
                   setTimeout(function(){
                       self.currentComponent = component;
                   }, 1200);

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
           max-width: 40px;
           vertical-align: middle;
       }
   </style>