<template>
  <NavBar />
  <div class="duration-100 sm:w-3/4 mx-auto w-11/12">
    <h1>Contact me</h1>
    <form class="flex flex-col gap-4 items-center">
      <input class="field" type="text" placeholder="Fullname"/>
      <input class="field" type="email" placeholder="Email"/>
      <textarea class="field" placeholder="Message"/>
      <input class="btn cursor-pointer" type="submit">
    </form>
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