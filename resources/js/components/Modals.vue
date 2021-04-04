<template>
   <div>
        <register-modal/>
        <car-modal/>
   </div>
</template>

<script>
import CarModal from './CarModal.vue'
import RegisterModal from './RegisterModal.vue'
export default {
  components: { RegisterModal, CarModal },

}
</script>

<style>

</style>