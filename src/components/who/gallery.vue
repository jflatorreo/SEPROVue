<template>
    <div style="width: 90%;margin: auto">
        <div class="breadcrumb-container">
            <a href="" v-scroll-to="'#sepro-who'" v-on:click.prevent="swapComponent('left')"><h2 v-if="n>0">{{this.component_labels[components[n-1]]}}</h2></a>
            <!-- <h1 v-if="n>0"><--</h1>-->
         <h1 style="margin-left: 10px;margin-right: 10px">{{this.component_labels[components[n]]}} </h1>
            <!-- <h1 v-if="components[n+1]"></h1>-->
            <a href="" v-scroll-to="'#sepro-who'" v-on:click.prevent="swapComponent('right')"><h2>{{this.component_labels[components[n+1]]}}</h2></a>
        </div>

        <div v-if="n>0" class="left-row">
            <img :src="currentImg_left"
                 @click="swapComponent('left')"
                 v-scroll-to="'#sepro-who'"
                 @mouseout="currentImg_left = dafaultImage_left"
                 @mouseover="currentImg_left = overImage_left"/>
        </div>

<div :is="currentGallery" class="carousel"></div>

        <div v-if="components[n+1]" class="rigth-row">
            <img :src="currentImg_right"
                 @click="swapComponent('right')"
                 v-scroll-to="'#sepro-who'"
                 @mouseout="currentImg_right = dafaultImage_right"
                 @mouseover="currentImg_right = overImage_right"/>

        </div>

    </div>
</template>

<script>
    import international_professors from "./international-professors"
    import national_professors from "./national-professors"
    import doctoral_students from "./doctoral-students"
    import magister_students from "./magister-students"
    import aiming_professionals from "./aiming-professionals"
    import seeder from "./seeder"

    import spinner  from "../spinner";

    export default {
        name: "gallery",

        components:{
            international_professors,
            national_professors,
            doctoral_students,
            magister_students,
            aiming_professionals,
            seeder,
            spinner
        },
        data() {
            return{
            currentGallery:"national_professors",
                n:0,
                components:[
                    "national_professors",
                    "international_professors",
                    "doctoral_students",
                    "magister_students",
                    "aiming_professionals",
                    "seeder"
                ],
                component_labels:{
                    national_professors:"Profesores Nacionales",
                    international_professors:"Profesores Internacionales",
                    doctoral_students:"Estudiantes de Doctorado",
                    magister_students:"Estudiantes de Maestría",
                    aiming_professionals:"Profesionales de apoyo",
                    seeder:"Semillero"
                },
                currentImg_right: "./images/right.png",
                dafaultImage_right: "./images/right.png",
                overImage_right: "./images/right_hover.png",
                currentImg_left: "./images/left.png",
                dafaultImage_left: "./images/left.png",
                overImage_left: "./images/left_hover.png",
            };
        },

        methods:{
            swapComponent: function(direction)
            {
                var self = this;
                if (direction==="left"&& self.n > 0){
                    self.n--;
                    self.currentGallery = "spinner";
                    setTimeout(function(){
                        self.currentGallery = self.components[self.n];
                    }, 500);
                }
                if (direction==="right"&& self.n < self.components.length-1 ){
                    self.n++;
                    self.currentGallery = "spinner";
                    setTimeout(function(){
                        self.currentGallery = self.components[self.n];
                    }, 500);
                }

            }
        }
    }
</script>
<style>
    h1{
        color: #0f81cc;
    }
    .rigth-row, .left-row{
        display: inline-block;
        vertical-align: middle;
        width: 5%;
    }
    .rigth-row img, .left-row img{
        width: 100%;
    }
    .carousel{
        display: inline-block;
        width: 80%;
        margin-left: 5%;
        margin-right: 5%;
        vertical-align: middle;
        margin-top: 3%;
    }
    .breadcrumb-container h1, .breadcrumb-container h2{
        display: inline-block;
        color: #f68712;

    }
    .breadcrumb-container h2{
        text-transform: initial;
        font-size: small;

    }
</style>