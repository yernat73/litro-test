<template>
  <t-modal
        name="register"
        header="Создать аккаунт">
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Фамилия</span>
            <t-input placeholder="Введите фамилию" autocomplete="off"/>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Имя</span>
            <t-input placeholder="Введите имя" autocomplete="off"/>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Дата рождения</span>
            <t-datepicker placeholder="Укажите дату рождения"/>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Город</span>
            <t-input placeholder="Выберите город" autocomplete="off"/>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Пароль</span>
            <t-input placeholder="Введите пароль" autocomplete="off" type="password"/>
        </label>
        <label class="flex flex-col mb-4 ">
            <span class="mb-2 text-gray-700 font-medium">Повторите пароль</span>
            <t-input placeholder="Повторите пароль" autocomplete="off" type="password"/>
        </label>
        <button class="font-medium text-lg clickable py-4 px-3 rounded-lg bg-violet-900 border border-solid border-violet-900 focus:border-white focus:border-opacity-50 hover:bg-opacity-50 mb-4" @click="$modal.show('car')">Добавить авто</button>

        <button class="font-medium text-lg clickable py-4 px-3 rounded-lg bg-green-600 hover:bg-green-700 focus:bg-green-700">Далее</button>
    </t-modal>
</template>

<script>
export default {
    computed: {
        cars(){
            return this.$state.getters.cars;
        }
    }

}
</script>

<style>

</style>