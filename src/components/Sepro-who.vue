<template>
    <div>
        <hr>
    <h1 class="who-tittle">
        <img :src="currentImg"
             @mouseout="currentImg = dafaultImage"
             @mouseover="currentImg = overImage"
             v-if="currentComponent!='whomain'"
             v-scroll-to="'#sepro-who'"
             @click="currentImg = dafaultImage; swapComponent('whomain')"/>
        Quienes Somos<img :src="'images/menu_sepro.png'"/></h1>
        <div :is="currentComponent"></div>
    </div>
</template>

<script>


    import whomain from "./who/who-main";
    import researchers from "./who/researchers"
    import gallery from "./who/gallery"
    import estudiantes from "./who/estudiantes"

    import spinner from "./spinner";

    export default {
        name: "Sepro-who",
        components:{
            whomain,
            researchers,
            gallery,
            estudiantes,
            spinner
        },
        data() {
            return {
                currentComponent: "whomain",
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
<!--
<style lang="scss">
    @import 'animations.css';
</style>
-->
<style scoped>
    .who-tittle{
        color: #df8c95;
        text-align: end;
    }
    .who-tittle img{
        margin-left: 10px;
        max-width: 40px;
        vertical-align: middle;
    }
    hr{
        border-top: #fab88a;
    }
</style>