<template>
    <div>
        <table>
            <tbody>
                <tr>
                    <th>
                        <div>
                            <img  @click="" :src="'images/saludchoco.png'" width="100%"/>
                        </div>
                    </th>
                    <th>
                        <div>
                            <img  @click="" :src="'images/cundi.png'" width="100%"/>
                        </div>  
                    </th>
                </tr>

                <tr>
                    <th>
                        <div>
                            <img  @click="" :src="'images/colombiaproductiva.png'" width="100%"/>
                        </div>
                    </th>
                    <th>
                        <div>
                            <img  @click="" :src="'images/PAE.png'" width="100%"/>
                        </div>  
                    </th>
                </tr>
            </tbody>
        </table>
        
        
        

    </div>
</template>

<script>
    import LoremIpsum from 'vue-lorem-ipsum';
    export default {
        name: "extensionProjects",
        components:{
            'lorem': LoremIpsum
        },
    }
</script>

<style scoped>

    .course-container{
        display: inline-table;
        width: 50%;
        padding: 3%;
        margin: auto;
    }
    .course-container img{
        width: 39%;

        float: left;

        margin-right: 20px;

        cursor: copy;
    }
    .course-container p{
        color: #000;
        text-align: justify;
    }
    .course-container h2{

        color: #000000;
        cursor: copy;
        margin-bottom: 10px;
    }


</style>