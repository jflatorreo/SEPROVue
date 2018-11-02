<template>
    <div style="margin-left: 5%">
        <h1 class="contact-tittle">Contacto<img :src="'images/menu_sepro.png'"/></h1>

        <div class="row">

            <br><br><br><br>
            <div class="column-left">
                <img style="width:100%" :src="'https://dummyimage.com/550/ffffff/000000'"/>
            </div>
            <div class="column-right">
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
                    <div class="contact-data">
                        <p>Universidad Nacional de Colombia <br>
                            Carrera 45 No 26-85 - Edificio Antonio Nariño<br>
                            Oficina 115<br>
                            Bogotá D.C. - Colombia</p>
                    </div>
                </div>


            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Sepro-contact"
    }
</script>

<style scoped>
    .row {
        display: flex;
        margin-bottom: 2%;
    }

    .column-right {
        flex: 50%;
        padding-left:20px;
        display: flex;
        justify-content: center;
    }
    .column-left{
        flex: 50%;
        padding-right:20px;
        border-right: 1px solid #22783f;
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
    }
    .contact-container{
        display: table;
        margin: auto;
        min-width: 247px;
        margin-bottom: 20px;
    }
    .contact-container img{
        width: 30%;
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
    }
    .centered-middle{
        align-self: center;
    }
</style>
