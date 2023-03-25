<template>
  <NavBar />
  <div class="duration-100 sm:w-3/4 mx-auto w-11/12">
    <h1 class="text-6xl font-bold text-center mb-10 mt-10">Contact</h1>
    <form class="flex flex-col gap-4 w-3/4 md:w-3/6 mx-auto items-center">
      <input class="field" type="text" v-model="name" name="name" maxlength="100" required placeholder="Nom"/>
      <input class="field" type="email" v-model="email" name="email" maxlength="100" required placeholder="Adresse email"/>
      <input class="field" type="text" minlength="10" maxlength="150" required placeholder="Objet"/>
      <textarea class="field h-32" v-model="message" name="message" minlength="25" maxlength="2000" required placeholder="Votre message"/>
      <!-- TODO : Ajouter une verification avec un petit calcul-->
      <div class="w-full">
        <input class="btn cursor-pointer" type="submit" value="Envoyer">
      </div>
    </form>
  </div>
  <FooterBox />
</template>

<script>

import NavBar from "@/components/NavBar.vue";
import FooterBox from "@/components/FooterBox.vue";
import emailjs from 'emailjs-com';

export default {
  name: "ContactView",
  components: {FooterBox, NavBar},
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
            'YOUR_USER_ID', {
              name: this.name,
              email: this.email,
              message: this.message
            })

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

<style scoped>

</style>