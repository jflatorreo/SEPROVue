<template>
    <div>
        <div class="breadcrumb-container">
            <h2 v-if="n>0">{{this.component_labels[components[n-1]]}}</h2>
            <!-- <h1 v-if="n>0"><--</h1>-->
         <h1>{{this.component_labels[currentGallery]}} </h1>
            <!-- <h1 v-if="components[n+1]"></h1>-->
        <h2>{{this.component_labels[components[n+1]]}}</h2>
        </div>

        <div v-if="n>0" class="left-row">
            <img :src="'./images/left.png'"
                 @click="swapComponent('left')"

            />
        </div>

<div :is="currentGallery" class="carousel"></div>

        <div v-if="components[n+1]" class="rigth-row">
            <img :src="'./images/rigth.png'"
                 @click="swapComponent('right')"/>
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
                }
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