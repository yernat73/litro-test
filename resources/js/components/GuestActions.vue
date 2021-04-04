<template>
  <ul class="flex text-gray-400">
    <li>  
        <a class="clickable hover:text-white" href="#" @click="$modal.show('register')">Зарегистрироваться</a>
    </li>
    <li class="mx-2">/</li>
    <li>  
        <a class="clickable hover:text-white" href="#" @click="$modal.show('car')">Добавить авто</a>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>