<template>
    <div>
<div class="rigth-row">
    <img :src="'./images/rigth.png'"
    @click="swapComponent('estudiantes')"/>
</div>
        <div class="left-row">
            <img :src="'./images/left.png'"
                 @click="swapComponent('estudiantes')"/>
        </div>
<div>
    <h1>INVESTIGADORES</h1>
    <photos source="./resources/researchers.json"></photos>
    <theater></theater>
</div>


    </div>
</template>

<script>
    import {store, Photos, Theater} from "vuejs-carousel"

    export default {
        name: "gallery",
        components:{
            store:store,
        photos:Photos,
            theater:Theater
        },
        methods:{
            swapComponent: function(component)
            {
                this.$parent.currentComponent = "spinner";
                var parent = this.$parent;
                setTimeout(function(){
                    parent.currentComponent = component;
                }, 800);
            }
        }
    }
</script>
<style>
    h1{
        color: #0f81cc;
    }
    .rigth-row{
        float: right;
    }
    .left-row{
        float: left;
    }
</style>