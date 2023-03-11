<template>
  <NavBar />
  <div class="duration-100 sm:w-3/4 mx-auto w-11/12">
    <h1 class="text-6xl font-bold text-center mb-10 mt-10">Contact me</h1>
    <form class="flex flex-col gap-4 w-3/6  mx-auto items-center">
      <input class="field" type="text" maxlength="100" required placeholder="Name"/>
      <input class="field" type="email" maxlength="100" required placeholder="Email adress"/>
      <input class="field" type="text" minlength="10" maxlength="150" required placeholder="Subject"/>
      <textarea class="field h-32" minlength="25" maxlength="2000" required placeholder="Your message"/>
      <!-- TODO : Ajouter une verification avec un petit calcul-->
      <div class="w-full">
        <input class="btn cursor-pointer" type="submit" value="Send message">
      </div>
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