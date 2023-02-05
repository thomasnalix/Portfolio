<template>
  <NavBar />
  <h1>Contact me</h1>
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