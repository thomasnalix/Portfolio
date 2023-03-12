<template>
  <div class="flex duration-100 sm:w-3/4 w-11/12 mx-auto mt-3 justify-between items-center">
    <img class="w-12 h-auto" src="@/assets/img/logo.png" alt="logo">
    <div class="flex duration-100 justify-end md:gap-20 gap-4 sm:gap-10 items-center ">
      <router-link class="text-gray-300 hover:text-white" to="/">Accueil</router-link>
      <router-link class="text-gray-300 hover:text-white" to="/projects">Projets</router-link>
      <router-link class="btn" to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>