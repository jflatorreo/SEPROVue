<template>



    <div class="sepro-header-container" :style="{'background-image': 'url(' + require('../../public/images/home_header_bg.png') + ')'}">
        <div class="header-left">
            <img style="width: 100%" :src="'./images/logo-11.png'" />
            <div class="links">
                <a v-scroll-to="'#sepro-who'"><img class="qs" id="qs" @mouseleave="qs_reset" @mouseover="qs_hover" :src="'images/qs.png'"/></a>
                <a v-scroll-to="'#sepro-what'"><img class="qh" id="qh" @mouseleave="qh_reset" @mouseover="qh_hover" :src="'images/qh.png'"/></a>
                <a v-scroll-to="'#sepro-contact'"><img class="contacto" id="contacto" @mouseleave="contacto_reset" @mouseover="contacto_hover" :src="'images/contacto.png'"/></a>

            </div>
        </div>
        <div class="vl"></div>
        <div class="header-right">
            <h2>Noticias</h2>
        <sepro-twitter class="twitter-container"></sepro-twitter>

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
        border-left: 2px solid #ffffff;
        height: 400px;
        position: absolute;
        left: 50%;
        margin-left: -3px;
        margin-top: -250px;
    }
.sepro-header-container{
    width: 100%;
    height: 529px;
    background-size: contain;
}
/*
.header-right{
    float: right;
    margin-left: -335px;
    min-height: 150px;
    margin-top:50px;
}*/

.header-right h2{
        color: #eecc24;
    }
/*
.header-left{
    float: left;

    margin-left: 20%;

    margin-top: 100px;

    color: white;

    width: 25%;
}*/
    .links{
        margin-top: 10%;


        margin-right: auto;
    }
     .qs, .qh{
        max-width: 25%;
         margin-left: 8%;
         cursor: pointer;
    }
    .contacto{
        max-width: 18%;
        margin-left: 10%;
        cursor: pointer;
    }


    @media screen and (min-width: 37.5em ) {
        .sepro-header-container{
            position: relative;
            vertical-align: middle;
            padding-top: 100px;
        }
        .header-left { margin-right: 28.5vw;
            margin-left: 20%;
            color: white;
            width: 25%;}

        .header-right { position: absolute; top: 8%; right: 10%; width: 29.75vw; }

        .twitter-container{
         height: 350px;
        }

    }

    @media screen and (max-width: 37.5em ) {

        .vl {
            display: none;
        }
        .sepro-header-container{
            min-height: 170vw;
            padding-top: 20px;
        }
        .twitter-container{
            height: 220px;
        }
        .header-right { margin-top: 30px }
        .header-left { width: 80%;margin: auto;margin-top: 20px }
    }

</style>