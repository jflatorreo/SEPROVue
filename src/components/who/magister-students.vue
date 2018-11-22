<template>
    <div>

        <photos source="./resources/magister-students.json"></photos>
        <theater></theater>
    </div>
</template>

<script>
    import {store, Photos, Theater} from "vuejs-carousel"
    export default {
        name: "magister-students",
        components:{
            store:store,
            photos:Photos,
            theater:Theater
        }
    }
</script>

<style scoped>

</style>