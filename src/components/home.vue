<template>
<div>
    <sepro-who id="sepro-who"></sepro-who>
    <sepro-what id="sepro-what"></sepro-what>
    <sepro-contact id="sepro-contact"></sepro-contact>
</div>
</template>

<script>
    import SeproWhat from "./Sepro-what";
    import SeproWho from "./Sepro-who";
    import SeproContact from "./Sepro-contact";

    export default {
        name: "home",
        components: {
            SeproWhat,
            SeproWho,
            SeproContact,
        },
        mounted: function () {
            initMap(true);
        },
    }
</script>

<style scoped>

</style>