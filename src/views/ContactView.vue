<template>
  <NavBar />
  <div class="duration-100 sm:w-3/4 w-11/12">
    <h1>Contact me</h1>
  </div>
  <FooterBox />
</template>

<script>

import NavBar from "@/components/NavBar.vue";
import FooterBox from "@/components/FooterBox.vue";

export default {
  name: "ContactView",
  components: {FooterBox, NavBar}
}
</script>

<style scoped>

</style>