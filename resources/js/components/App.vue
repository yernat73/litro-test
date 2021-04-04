<template>
    <section class="mx-auto my-auto">
        <guest-actions/>        
        <modals/>
    </section>
</template>

<script>
import GuestActions from './GuestActions.vue'
import Modals from './Modals.vue'

export default {
    components: { GuestActions, Modals},
    mounted(){
        this.$store.dispatch("getCarBrands");
    }
}
</script>

<style>

</style>
GuestActions