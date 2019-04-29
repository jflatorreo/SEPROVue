<template>
    <div>

        <photos source="./resources/doctoral-students.json"></photos>
        <theater></theater>
    </div>
</template>

<script>
    import {store, Photos, Theater} from "vuejs-carousel"
    export default {
        name: "doctoral-students",
        components:{
            store:store,
            photos:Photos,
            theater:Theater
        }
    }
</script>

<style scoped>

</style>