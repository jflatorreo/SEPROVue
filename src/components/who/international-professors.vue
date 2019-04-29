<template>
    <div>

        <photos source="./resources/international-professors.json"></photos>
        <theater></theater>
    </div>
</template>

<script>
    import {store, Photos, Theater} from "vuejs-carousel"
    export default {
        name: "international-professors",
        components:{
            store:store,
            photos:Photos,
            theater:Theater
        }
    }
</script>

<style scoped>

</style>