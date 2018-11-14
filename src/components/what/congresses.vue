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
                        from: '2018',
                        to: '2014'
                    },
                    items: [
                        {
                            nameMonth: 'I Congreso',
                            title: '<img src="images/logo_proyecto.png" class="logo"><span class="Icongress">Logistica para la competitividad</span>',
                            description:
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
                        },
                        {
                            nameMonth: 'II Congreso',
                            title: '<img src="images/logo_proyecto.png" class="logo"><span class="IIcongress">Logística, innovación y desarrollo tecnológico</span>',
                            description:
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
                        },
                        {
                            nameMonth: 'III Congreso',
                            title: '<img src="images/logo_proyecto.png" class="logo"><span class="IIIcongress">Gestión de cadenas de abastecimiento en el mundo cambiante</span>',
                            description:
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
                        },
                        {
                            nameMonth: 'IV Congreso',
                            title: '<img src="images/logo_proyecto.png" class="logo"><span class="IVcongress">La Ingeniería Industrial y Gestion de cadenas de abastecimiento para el Desarrollo Sostenible</span>',
                            description:
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
                        }
                        , {
                            nameMonth: 'V Congreso',
                            title: '<img src="images/logo_proyecto.png" class="logo"><span class="Vcongress">Industria y logística para el desarrollo</span>',
                            description:
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
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

</style>