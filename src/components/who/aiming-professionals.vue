<template>
    <div>

        <photos source="./resources/aiming-professionals.json"></photos>
        <theater></theater>
    </div>
</template>

<script>
    import {store, Photos, Theater} from "vuejs-carousel"
    export default {
        name: "aiming-professionals",
        components:{
            store:store,
            photos:Photos,
            theater:Theater
        }
    }
</script>

<style scoped>

</style>