<template>
  <t-modal
        name="register"
        header="Создать аккаунт">
        <t-alert class="mb-4" variant="success" :show="alertIsActive">
            Аккаунт зарегистрирован
        </t-alert>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Фамилия</span>
            <t-input placeholder="Введите фамилию" autocomplete="off" v-model="formData.surname"/>
            <span class="mt-1 text-red-300 text-xs" v-if="errorMessage('surname')">* {{ errorMessage('surname') }}</span>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Имя</span>
            <t-input placeholder="Введите имя" autocomplete="off" v-model="formData.name"/>
            <span class="mt-1 text-red-300 text-xs" v-if="errorMessage('name')">* {{ errorMessage('name') }}</span>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Email</span>
            <t-input placeholder="Введите email" autocomplete="off" type="email" v-model="formData.email"/>
            <span class="mt-1 text-red-300 text-xs" v-if="errorMessage('email')">* {{ errorMessage('email') }}</span>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Дата рождения</span>
            <t-datepicker placeholder="Укажите дату рождения" v-model="formData.birth_date"/>
            <span class="mt-1 text-red-300 text-xs" v-if="errorMessage('birth_date')">* {{ errorMessage('birth_date') }}</span>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">ИИН (опционально)</span>
            <input-mask class="input" placeholder="Введите ИИН" mask="999999999999" maskChar=" " v-model="formData.iid"/>
            <span class="mt-1 text-red-300 text-xs" v-if="errorMessage('iid')">* {{ errorMessage('iid') }}</span>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Город</span>
            <v-select :options="cityOptions" placeholder="Выберите город" v-model="formData.city" autocomplete="off"></v-select>
             <span class="mt-1 text-red-300 text-xs" v-if="errorMessage('city')">* {{ errorMessage('city') }}</span>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Пароль</span>
            <t-input placeholder="Введите пароль" autocomplete="off" type="password" v-model="formData.password"/>
            <span class="mt-1 text-red-300 text-xs" v-if="errorMessage('password')">* {{ errorMessage('password') }}</span>
        </label>
        <label class="flex flex-col mb-4 ">
            <span class="mb-2 text-gray-700 font-medium">Повторите пароль</span>
            <t-input placeholder="Повторите пароль" autocomplete="off" type="password" v-model="formData.password_confirmation"/>
        </label>
        <button class="font-medium text-lg clickable py-4 px-3 rounded-lg bg-violet-900 border border-solid border-violet-900 focus:border-white focus:border-opacity-50 hover:bg-opacity-50 mb-4" @click="$modal.show('car')">Добавить авто</button>

        <button class="font-medium text-lg clickable py-4 px-3 rounded-lg bg-green-600 hover:bg-green-700 focus:bg-green-700" @click.stop="save">Далее</button>
    </t-modal>
</template>

<script>
import cities from "./../cities"
export default {
    data(){
        return {
            formData: {
                suranme: null,
                name: null,
                email: null,
                birth_date: null,
                iid: null,
                city: null,
                password: null,
                password_confirmation: null,
            }
        }
    },
    computed: {
        users(){
            return this.$store.getters.users
        },
        cityOptions(){
            return cities
        },
        cars(){
            return this.$state.getters.cars
        },
        errors(){
            return this.$store.getters.userRegistrationErrors
        },
        alertIsActive(){
            return this.$store.getters.userRegistrationSuccess
        }
    },
    watch: {
        users(){
            this.formData = {
                suranme: null,
                name: null,
                email: null,
                birth_date: null,
                iid: null,
                city: null,
                password: null,
                password_confirmation: null,
            }
        }
    },
    methods: {
        save(){
            let formData = this.formData
            formData.cars = this.$store.getters.cars

            this.$store.dispatch('registerUser', formData)
            this.$store.dispatch('getUsers')
        },
        errorMessage(attr){
            if(!this.errors[attr]){
                return null
            }
            return this.errors[attr][0];
        }
    }

}
</script>

<style>

</style>