<template>
    <Timeline
            :timeline-items="timelineItems"
            :message-when-no-items="messageWhenNoItems"/>
</template>

<script>
    import Timeline from 'timeline-vuejs'

    export default {
        components: {
            Timeline
        },
        data: () => ({
            messageWhenNoItems: 'There arent items',
            timelineItems: [
                {
                    year: {
                        from: '2019',
                        to: '2014'
                    },
                    items: [
                        {
                            nameMonth: '2014 - I Congreso',
                            title: '<img src="images/ciio2014.png" class="logo"><span class="Icongress">Logistica para la competitividad</span>',
                            description:
                                '<p style="text-align: justify">La primera versión del Congreso Internacional de Industria y Organizaciones – Logística para la Competitividad (CIIO 2014), se llevó a cabo en el Auditorio Alfonso López Pumarejo de la Universidad Nacional de Colombia los días 21 y 22 de agosto. Este espacio permitió abordar problemáticas actuales del país y la región, tratando temas vigentes y de vanguardia, con el fin de generar empoderamiento del conocimiento por parte de la sociedad civil y los diferentes grupos participantes. Entre los conferencistas internacionales se resalta la participación del PhD. David Simchi Levi del Instituto de Tecnología de Massachusetts y la PhD. María Fernanda Rey, Directora Ejecutiva del Latin America Logistics Center.</p>'
                        },
                        {
                            nameMonth: '2015 - II Congreso',
                            title: '<img src="images/ciio2015.png" class="logo"><span class="IIcongress">Logística, innovación y desarrollo tecnológico</span>',
                            description:
                                '<p style="text-align: justify">El II Congreso Internacional Industria y Organizaciones – Logística, Innovación y Desarrollo Tecnológico (CIIO 2015), estuvo liderado por la Universidad Nacional de Colombia y se realizó en el Auditorio Alfonso López Pumarejo de la Sede Bogotá con transmisión directa al Edificio de Ciencia y Tecnología, los días 4, 5 y 6 de agosto. Contó con un total de 300 asistentes, y la participación de conferencistas internacionales entre los cuales se resalta al PhD. Teodor Crainic de la Universidad de Montreal, PhD. Ana Nagurney de la Universidad de Massachusetts Amherst y el PhD. José Holguín Veras del Instituto Politécnico Rensselaer, entre otros,  quienes expusieron temas de relevancia en la gestión logística integral.</p>'
                        },
                        {
                            nameMonth: '2016 - III Congreso',
                            title: '<a href="http://www.univalle.edu.co/lo-que-pasa-en-la-u/inicia-ciio-2016" target="_blank"> <img src="images/ciio2016.png" class="logo"><span class="IIIcongress">Gestión de cadenas de abastecimiento en el mundo cambiante</span>',
                            description:
                                '<p style="text-align: justify">La Escuela de Ingeniería Industrial de la Universidad del Valle fue la anfitriona del III Congreso Internacional Industria y Organizaciones - Gestión de Cadenas de Abastecimiento en un Mundo Cambiante, realizado los días 24, 25 y 26 de agosto del 2016, en las instalaciones del Hotel NH Cali Royal de Cali y la sede universitaria Meléndez, al cual asistieron cerca de 200 participantes del sector público, privada y de Gobierno. El contenido de esta versión fue de gran importancia para la ciudad, temas como la logística humanitaria, logística urbana sostenible, logística de atención en desastres, logística hospitalaria, diseño y operación de cadenas de abastecimiento y sistemas de transporte de carga urbana sostenibles fueron debatidos entre distintos grupos de investigación del país y expertos en la materia.</p>'
                        },
                        {
                            nameMonth: '2017 - IV Congreso',
                            title: '<a href="http://ingenieria.udea.edu.co/ciio2017/" target="_blank"> <img src="images/ciio2017.png" class="logo"><span class="IVcongress">La Ingeniería Industrial y Gestion de cadenas de abastecimiento para el Desarrollo Sostenible</span></a>',
                            description:
                                '<p style="text-align: justify">La versión de IV Congreso Internacional Industria y Organizaciones – La Ingeniería Industrial y la Gestión de Cadenas de Abastecimiento para el Desarrollo Sostenible (CIIO – 2017), estuvo a cargo de La Universidad de Antioquia, junto al apoyo de la Universidad del Valle, y la Universidad Nacional de Colombia, se realizó en la sede de la Universidad de Antioquia, los días 17 y 18 de agosto de 2017 y contó con la participación de alrededor de 300 asistentes entre academia, sector privado, gobierno y ciudadanía. En su cuarta versión, el Congreso trató sobre las Aplicaciones de la Ingeniería Industrial para un Desarrollo Sostenible, haciendo énfasis en cómo la Gestión de Cadenas de Abastecimiento y la Logística pueden contribuir en dicho desarrollo. Entre los conferencistas internacionales se destaca la participación de los PhD. José René Villalobos de la Universidad de Arizona, Sally Brailsford de la Universidad de Southampton y Pitu Mirchandani de la Universidad de Arizona.</p>'
                        }
                        , {
                            nameMonth: '2018 - V Congreso',
                            title: '<a href="http://www.seprologistica.unal.edu.co/CIIO2018/" target="_blank"> <img src="images/ciio2018.png" class="logo"><span class="Vcongress">Industria y logística para el desarrollo</span></a>',
                            description:
                                '<p style="text-align: justify">Finalmente, la quinta versión del Congreso para el año 2018, “V Congreso Internacional Industria y Organizaciones - Industria y Logística para el Desarrollo”  estuvo a cargo del grupo de investigación SEPRO - Universidad Nacional de Colombia. El evento se realizó los días 1, 2 y 3 de agosto en el campus de la Universidad Nacional sede Bogotá,  contó con la asistencia de alrededor de 400 personas y de un nutrido grupo de conferencistas internacionales de países como, Francia, Chile, Brasil, Perú y Suecia. Se recibieron en total 168 trabajos de investigación, de los cuales se aceptaron 100 trabajos, 80 trabajos para ponencias y 20 trabajos para poster.</p>'
                        },
                        {
                            nameMonth: '2019 - VI Congreso',
                            title: '<a href="https://www.urosario.edu.co/VI-Congreso-Internacional-Industria-Organizacione/inicio/" target="_blank"> <img src="images/ciio2019.png" class="logo"><span class="VIcongress">Impactos y perspectivas de la cuarta revolución industrial</span></a>',
                            description:
                                '<p style="text-align: justify">Para este año se realizará un esfuerzo conjunto entre la Universidad Nacional de Colombia, Escuela Naval de Cadetes Almirante Padilla y la Universidad del Rosario bajo la temática “Impactos y Perspectivas de la Cuarta revolución industrial”.</p>'
                        }
                    ]
                }
            ]
        })
    }
</script>
<style>
    .logo{
        width: 100px;
    }
    .year{
        color: #0a0a0a;
    }
    .month-item{
        color: #000;
    }
    .description-item{
             color: #000000;
         }
    .Icongress{
        color: red;
    }
    .IIcongress{
        color: #31b9ff;
    }
    .IIIcongress{
        color: #ff4388;
    }
    .IVcongress{
        color: #377937;
    }
    .Vcongress{
        color: #00067b;
    }
    .VIcongress{
        color: #14243b;
    }

</style>