<template>
    <div>

        <photos source="./resources/national-professors.json"></photos>
        <theater></theater>
    </div>
</template>

<script>
    import {store, Photos, Theater} from "vuejs-carousel"
    export default {
        name: "national-professors",
        components:{
            store:store,
            photos:Photos,
            theater:Theater
        }
    }
</script>

<style scoped>

</style>