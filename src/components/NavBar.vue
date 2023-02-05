<template>
  <div class="flex w-3/4 mx-auto justify-between items-center">
    <img class="w-12 h-6" src="@/assets/img/logo.png" alt="logo">
    <div class="flex justify-end gap-20 items-center mt-3">
      <router-link class="text-gray-300 hover:text-white" to="/">Home</router-link>
      <router-link class="text-gray-300 hover:text-white" to="/projects">Project</router-link>
      <router-link class="btn" to="/contact">Contact me</router-link>
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