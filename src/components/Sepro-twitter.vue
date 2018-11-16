<template>


        <div >
            <a class="twitter-timeline" data-dnt="true" width="350" height="350"  href="https://twitter.com/SEPROLOGISTICA" data-widget-id="401392579922497536">Tweets por @SEPROLOGISTICA</a>
            <br>
            <a href="https://twitter.com/SEPROLOGISTICA?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-lang="es" data-show-count="false">Follow @SEPROLOGISTICA</a>
            <div style="float:right">
                <a href="https://www.facebook.com/GrupoSEPROLogistica/" target="_blank" class="facebook" title="Página oficial en Facebook" :style="{'background-image': 'url(' + require('../../public/images/icnSocial.png') + ')'}"></a>
                <a href="https://twitter.com/SEPROLOGISTICA" target="_blank" class="twitter" title="Página oficial en Twitter" :style="{'background-image': 'url(' + require('../../public/images/icnSocial.png') + ')'}"></a>
               <!-- <a class="circle" href=""><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                <a class="circle" href=""><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>-->
            </div>
        </div>


</template>

<script>
    export default {
        mounted() {
            /* eslint-disable */
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    t = window.twttr || {};
                if (d.getElementById(id)) return t.widgets.load();
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);

                t._e = [];
                t.ready = function (f) {
                    t._e.push(f);
                };
                return t;
            }(document, "script", "twitter-wjs"));
            /* eslint-enable */
        },
    };
</script>

<style scoped>
    .circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        /*font-size: 50px;
        color: #fff;*/
        line-height: 30px;
        text-align: center;
        background: #ffffff;
        display: inline-block;
    }

    a.twitter, a.twitter:hover, a.facebook, a.facebook:hover{
        background: no-repeat 0 0 ;
        display: inline-block;
        height: 20px;
        width: 20px;

    }
    a.twitter:hover, a.facebook, a.facebook:hover {
        background-position: 0 -21px;
    }

    a.facebook {
        background-position: -21px 0;
    }

    a.facebook:hover {
        background-position: -21px -21px;
    }
</style>