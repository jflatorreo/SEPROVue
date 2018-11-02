<template>



    <div class="sepro-header-container" :style="{'background-image': 'url(' + require('../../public/images/home_header_bg.png') + ')'}">
        <div class="header-left">
            <h1>SEPRO</h1>

        </div>
        <div class="vl"></div>
        <div class="header-right">
        <sepro-twitter></sepro-twitter>

        </div><br><br><br>
        <div class="links">
            <a v-scroll-to="'#sepro-who'"><img class="qs" id="qs" @mouseleave="qs_reset" @mouseover="qs_hover" :src="'images/qs.png'"/></a>
            <a v-scroll-to="'#sepro-what'"><img class="qh" id="qh" @mouseleave="qh_reset" @mouseover="qh_hover" :src="'images/qh.png'"/></a>
            <a v-scroll-to="'#sepro-contact'"><img class="contacto" id="contacto" @mouseleave="contacto_reset" @mouseover="contacto_hover" :src="'images/contacto.png'"/></a>

        </div>



    </div>


</template>

<script>
function a(){
    alert("a");
}
    import SeproTwitter from "./Sepro-twitter";

    export default {
        components: {
            SeproTwitter
        },
        methods:{
            qs_hover: function(){
                $("#qs").attr("src","images/qs_hover.png");
            },
            qs_reset: function () {
                $("#qs").attr("src","images/qs.png");
            },
            qh_hover: function(){
                $("#qh").attr("src","images/qh_hover.png");
            },
            qh_reset: function () {
                $("#qh").attr("src","images/qh.png");
            },
            contacto_hover: function(){
                $("#contacto").attr("src","images/contacto_hover.png");
            },
            contacto_reset: function () {
                $("#contacto").attr("src","images/contacto.png");
            },
        }
    };
</script>

<style scoped>
    .vl {
        border-left: 6px solid #ffffff;
        height: 150px;
        position: absolute;
        left: 50%;
        margin-left: -3px;
        margin-top: 60px;
    }
.sepro-header-container{
    width: 100%;
    min-height: 200px;
    background-size: cover;
}
.header-right{
    float: right;
    margin-right: 8%;
    min-height: 150px;
    margin-top:50px;
}
.header-left{
    float: left;
    margin-left: 20%;
    margin-top: 100px;
    color: white;
}
    .links{
        margin-top: 250px;
        margin-left: 20%;
        margin-right: auto;
    }
     .qs, .qh{
        max-width: 15%;
         margin-left: 10%;
         cursor: pointer;
    }
    .contacto{
        max-width: 10%;
        margin-left: 10%;
        cursor: pointer;
    }

</style>