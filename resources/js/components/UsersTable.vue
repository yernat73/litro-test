<template>
    <table class="table-auto rounded-lg bg-violet-800 text-lg font-medium text-left">
        <thead>
            <tr>
                <th></th>
                <th colspan="2" class="text-2xl">Аккаунты</th>
            </tr>
            <tr class="text-gray-500">
                <th>#</th>
                <th>Имя</th>
                <th>Авто</th>
            </tr>
        </thead>
        <tbody class="">
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }} {{ user.surname }} </td>
                <td>{{ user.cars.length }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    computed: {
        users(){
            return this.$store.getters.users
        }
    }

}
</script>

<style>

</style>