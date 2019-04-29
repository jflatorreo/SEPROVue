<template>
    <div>
        <hr>
        <h1 class="contact-tittle">Contacto<img :src="'images/menu_sepro.png'"/></h1>

        <div class="columns-container">

            <div class="left-column-container">
             <!--   <img style="width:100%" :src="'https://dummyimage.com/550/ffffff/000000'"/> -->
                <GoogleMap/>
                <div class="contact-data">
                    <p>Universidad Nacional de Colombia <br>
                        Carrera 45 No 26-85 - Edificio Antonio Nariño<br>
                        Oficina 115<br>
                        Bogotá D.C. - Colombia</p>
                </div>
            </div>
            <div class="right-column-container">
                <div class="centered-middle">
                <div class="contact-container">
                    <img :src="'images/telefono.png'"/>
                    <h2 class="contact-subtittle">Llámenos</h2>
                    <p>+57 (1) 316 5000<br>Ext. 16642, 16643</p>
                </div>
                <div class="contact-container">
                    <img :src="'images/correo.png'"/>
                    <h2 class="contact-subtittle">Escríbanos</h2>
                    <p><a href="mailto:sepro_fibog@unal.edu.co">sepro_fibog@unal.edu.co</a></p>
                </div>

                </div>


            </div>
        </div>

    </div>
</template>

<script>
    import GoogleMap from "./GoogleMap";
    export default {
        name: "Sepro-contact",
        components: {GoogleMap}
    }
</script>

<style scoped>

    .right-column-container {
        margin-top: 30px;
        vertical-align: middle;
    }
    .contact-tittle{
        color: #22783f;
        text-align: end;
    }
    .contact-tittle img{
        margin-left: 10px;
    }
    .contact-subtittle{
        color: #22783f;
        font-size: 3vw;
    }
    .contact-container{
        display: table;
        margin: auto;
        min-width: 247px;
        margin-bottom: 20px;
    }
    .contact-container img{
        width: 19%;
        float: left;
        margin-right: 3px;
    }
    .contact-container p{
        color: #22783f;
        text-align: justify;
    }
    .contact-container a{
        color: #22783f;
    }
    .contact-data p{
        color: #22783f;
        text-align: center;
        margin-top: 20px;
        margin-left: -10%;
    }
    .centered-middle{
        align-self: center;
    }
.columns-container{
    position: relative; margin: .5em;
    vertical-align: middle;
    margin: auto auto 33px auto;
    width: 90%;
}
    @media screen and (min-width: 47.5em ) {
        .left-column-container { margin-right: 22.5em; }

        .right-column-container { position: absolute; top: 25%; right: -2%; width: 18.75em; }
    }
</style>
