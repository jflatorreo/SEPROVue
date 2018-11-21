<template>
    <div>
        <div class="rigth-row">
            <img :src="'./images/rigth.png'"
                 @click="swapComponent('gallery')"/>
        </div>
        <div class="left-row">
            <img :src="'./images/left.png'"
                 @click="swapComponent('gallery')"/>
        </div>
<div>
        <h1>ESTUDIANTES</h1>

        <photos source="./resources/students.json"></photos>
        <theater></theater>
</div>
    </div>
</template>

<script>
    import {store, Photos, Theater} from "vuejs-carousel"
    export default {
        name: "estudiantes",
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

<style scoped>
    .Photo__source{
        margin: 10px;
    }
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