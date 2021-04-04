<template>
    <section class="mx-auto my-auto flex flex-col w-96">
        <users-table class="mb-6"/>
        <guest-actions/>        
        <modals/>
    </section>
</template>

<script>
import GuestActions from './GuestActions'
import Modals from './Modals'
import UsersTable from './UsersTable'

export default {
    components: { GuestActions, Modals, UsersTable},
    mounted(){
        this.$store.dispatch("getCarBrands")
        this.$store.dispatch("getUsers")
    },

}
</script>

<style>

</style>
GuestActions