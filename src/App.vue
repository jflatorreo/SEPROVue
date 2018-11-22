<template>
    <div id="app" v-cloak>

        <component :is="currentMenu" :right="side === 'right' ? true: false">
            <a href="#">
                <i class="fa fa-fw fa-star-o"></i>
                <span>Home</span>
            </a>
            <a href="#" v-scroll-to="'#sepro-who'">
                <img style="width: 30px; height: 30px;" :src="'images/qs_icon.png'"/>
                <span>Quienes Somos</span>
            </a>
            <a href="#" v-scroll-to="'#sepro-what'">
                <img style="width: 30px; height: 30px;" :src="'images/qh_icon.png'"/>
                <span>Que Hacemos</span>
            </a>
            <a href="#" v-scroll-to="'#sepro-contact'">
                <img style="width: 30px; height: 30px;" :src="'images/contacto_icon.png'"/>
                <span>Contacto</span>
            </a>

        </component>


        <main >
            <sepro-header></sepro-header>
            <sepro-who id="sepro-who"></sepro-who>
            <sepro-what id="sepro-what"></sepro-what>
            <sepro-contact id="sepro-contact"></sepro-contact>

        </main>

    </div>
</template>

<script>
    $(document).ready(function () {
        document.getElementById('menu-button').style.top = "-950px";
        $(window).scroll(function(){
            var ScrollTop = parseInt($(window).scrollTop());

            if (ScrollTop < 100) {

                document.getElementById('menu-button').style.top = "-950px";
            }else{
                document.getElementById('menu-button').style.top = "0px";

            }
        });
    });
    import slide from './components/Menu/slide';
    import bubble from './components/Menu/bubble';
    import elastic from './components/Menu/elastic';
    import falldown from './components/Menu/fallDown';
    import push from './components/Menu/push';
    import pushrotate from './components/Menu/pushRotate';
    import reveal from './components/Menu/reveal';
    import scaledown from './components/Menu/scaleDown';
    import scalerotate from './components/Menu/scaleRotate';
    import stack from './components/Menu/stack';
    import Menu from './components/Menu';

    import SeproHeader from "./components/Sepro-header";
    import SeproWhat from "./components/Sepro-what";
    import SeproWho from "./components/Sepro-who";
    import SeproContact from "./components/Sepro-contact";
    import GoogleMap from "./components/GoogleMap"



    import Vue from 'vue';
    import VueScrollTo from 'vue-scrollto';

    import {store} from 'vuejs-carousel';


    Vue.use(VueScrollTo, {
        container: "body",
        duration: 500,
        easing: "ease",
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    });

    export default {
        store,
      data() {
        return {
          menus: {
            slide: { buttonText: 'Slide' },
            push: { buttonText: 'Push' },
            pushRotate: { buttonText: 'Push Rotate' },
            reveal: { buttonText: 'Reveal' },
            scaleDown: { buttonText: 'Scale Down' },
            scaleRotate: { buttonText: 'Scale Rotate' }
            // elastic: { buttonText: 'Elastic - (WIP)' },
            // stack: { buttonText: 'Stack - (WIP)' },
            // bubble: { buttonText: 'Bubble - (WIP)' },
            // fallDown: { buttonText: 'Fall Down - (WIP)' }
          },
          side: 'left',
          currentMenu: 'slide'
        };
      },
      components: {
          SeproHeader,
          SeproWhat,
          SeproWho,
          SeproContact,
          GoogleMap,
          slide,
        bubble,
        elastic,
        push,
        pushrotate,
        scaledown,
        scalerotate,
        reveal,
        stack,
        falldown,
        Menu
      },
      methods: {
        changeMenu(menu) {
          this.currentMenu = menu.replace(/ +/g, '').toLowerCase();
          return this.currentMenu;
        },
        changeSide(side) {
          this.side = side;
        }
      }
    };
</script>

 <style lang="less">
    *,
    *:after,
    *:before {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    html {
      height: 100%;
    }

    body {
      height: 100%;
      color: #fffce1;
        font-size: 1.3vw;
      margin: 0px;
    }

    #app {
     /* height: 100%;*/
    }

    a {
      color: #4e4a46;
      text-decoration: none;

      &:hover,
      &:focus {
        color: #c94e50;
      }
    }

    main {
     /* height: 100%;
      padding: 3em 2em;
      text-align: center;
   /*   background: #b4bad2;
      overflow: auto;*/
        background: #ffffff;
    }

    h1 {
      font-weight: 800;
      font-size: 3.75em;
    }

    .description {
      max-width: 20em;
      margin: 1.2em auto 1em;
      line-height: 1.3em;
      font-weight: 400;
    }

    .demo-buttons {
      font-size: 1em;
      max-width: 1200px;
      margin: 2em auto 3em;
      padding: 0 10em;

      a {
        display: inline-block;
        margin: 0.75em;
        padding: 1.35em 1.1em;
        width: 15em;
        background: #fffce1;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 800;
        border-top-left-radius: 20px 50px;
        border-top-right-radius: 20px 50px;
        border-bottom-right-radius: 20px 50px;
        border-bottom-left-radius: 20px 50px;
        cursor: pointer;

        &.currentDemo {
          background: #c94e50;
          color: #fffce1;
        }
      }
    }

    .sideButton {
      display: inline-block;
      width: 5em;
      height: 2.5em;
      line-height: 2.5em;
      cursor: pointer;
      background: #fffce1;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.8em;
      font-weight: 800;

      &.left {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }

      &.right {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      &.active {
        background: #c94e50;
        color: #fffce1;
      }
    }

    @media screen and (max-width: 40em) {
      main {
        font-size: 80%;
      }

      h1 {
        padding-top: 1em;
        font-size: 2.5em;
      }

      .demo-buttons {
        max-width: 900px;
        padding: 0 2em;
      }
    }

    //
    // Burger menu custom styles
    //
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 16px;
      top: 150px;
    }

    .right .bm-burger-button {
      left: initial;
      right: 36px;
    }

    .bm-burger-bars {
      background: #373a47;
    }

    .bm-morph-shape {
      fill: #373a47;
    }

    .bm-menu {
      background: #373a47;

      a {
        color: #b8b7ad;

        &:hover,
        &:focus {
          color: #c94e50;
        }
      }
    }

    //
    // Mixins
    //
    .menu-1 {
      .bm-cross {
        background: #bdc3c7;
      }

      .bm-menu {
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
      }
    }

    .menu-2 {
      .bm-cross {
        background: #999;
      }

      .bm-menu {
        padding: 3.4em 1em 0;
      }

      a {
        padding: 1em;
      }

      i {
        font-size: 1.7em;
        vertical-align: middle;
        color: #282a35;
      }
    }

    .menu-3 {
      .bm-cross {
        background: #888;
      }

      .bm-menu {
        padding: 2em 1em;
        font-size: 1.15em;
      }

      i {
        opacity: 0.5;
      }

      span {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.75em;
      }
    }

    .menu-4 {
      .bm-cross {
        background: #888;
      }

      h2 {
        margin: 0 auto;
        padding: 2em 1em;
        color: rgba(0, 0, 0, 0.4);
        box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);

        i {
          margin-left: 0.2em;
        }

        span {
          font-size: 1.6em;
          font-weight: 700;
        }
      }

      a {
        padding: 1em;
        text-transform: uppercase;
        transition: background 0.3s, box-shadow 0.3s;
        box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);

        span {
          letter-spacing: 1px;
          font-weight: 400;
        }

        &:hover,
        &:focus {
          background: rgba(0, 0, 0, 0.2);
          box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
          color: #b8b7ad;
        }
      }
    }

    [v-cloak] > * { display: none; }
    [v-cloak]::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1;
        width: 150px;
        height: 150px;
        margin: -75px 0 0 -75px;
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
