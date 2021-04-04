<template>
  <t-modal
        name="car"
        header="Добавить авто">
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Марка автомобиля</span>
            <v-select :options="carBrands" label="name" placeholder="Выберите марку" v-model="formData.brand"></v-select>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Модель</span>
            <v-select :options="carBrandModes" label="name" placeholder="Выберите модель" v-model="formData.mode">
                <div slot="no-options">Выберите марку автомобиля!</div>
            </v-select>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Год выпуска</span>
            <t-input placeholder="Введите год"/>
        </label>
        <label class="flex flex-col mb-2">
            <span class="mb-2 text-gray-700 font-medium">Гос. номер авто</span>
            <input-mask class="input" v-model="formData.number" placeholder="Введите номер" mask="999 aaa 99" maskChar=" "/>
        </label>
        <label class="flex flex-col mb-4">
            <span class="mb-2 text-gray-700 font-medium">VIN номер (опционально)</span>
            <input-mask class="input" v-model="formData.vin" placeholder="Введите VIN номер" mask="99999999" maskChar=" "/>
        </label>

        <button class="font-medium text-lg clickable py-4 px-3 rounded-lg bg-green-600 hover:bg-green-700 focus:bg-green-700">Сохранить</button>
    </t-modal>
</template>

<script>
export default {
    data(){
        return {
            formData: {
                brand: null,
                mode: null,
                number: null,
                vin: null
            }
        };
    },
    computed: {
        carBrands(){
            return this.$store.getters.carBrands
        },
        carBrandModes(){
            if(!this.formData.brand){
                return [];
            }
            return this.$store.getters.carBrandModes
        }
    },
    watch: {
        'formData.brand': function(brand){
            if(brand){
                this.$store.dispatch('getCarBrandModes', brand.id )
            }
        }
    },
    mounted(){
    },
    methods: {
    }
    
}
</script>

<style>

</style>