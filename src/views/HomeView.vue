<template>
  <NavBar />
  <div class="flex flex-col items-center duration-100 sm:w-3/4 w-11/12 mx-auto">
    <div class="h-screen flex flex-col items-center justify-evenly gap-16">
      <div class="flex flex-col gap-14 items-center">
        <div class="flex flex-col gap-4">
          <h1 class="font-bold duration-100 sm:text-8xl text-6xl text-center">Hey, je suis</h1>
          <div class="typewriter">
            <h1 class="font-bold duration-100 sm:text-8xl text-4xl text-center">Thomas Nalix</h1>
          </div>
        </div>
        <h2 class="sm:text-2xl duration-100 text-center text-xl text-gray-200">Je suis étudiant en informatique.</h2>
      </div>
      <div class="flex items-end">
        <a class="hover:scale-105 duration-100" id="readme" href="#readme">
          <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 25L19 35L9 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M37 1L19 19L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
    <ScriptBox data-aos="fade-up" title="readme.txt">
      <div class="grid code-line mt-10 text-lg font-console">
        <p class="script-num">1</p>
        <p class="script-text">Bonjour ! Je suis Thomas Nalix, j'ai <span class="text-pink-300">{{ age }}</span> ans et je suis étudiant en informatique en BUT à l'IUT de Montpellier. Fasciné depuis toujours par le monde numérique, j'ai trouvé ma véritable vocation dans le développement web.</p>
        <p class="script-num">2</p>
        <p class="script-text">Au cours des dernières années, je me suis consacré à l'apprentissage et à la maîtrise de différents frameworks tels que <span class="text-teal-300">Angular</span>, <span class="text-teal-300">Vue</span>, et <span class="text-teal-300">Laravel</span>.</p>
        <p class="script-num">3</p>
        <p class="script-text">Ma passion pour le développement web m'a amené à entreprendre divers projets, où j'ai eu l'occasion de mettre en valeur mes <span class="text-blue-300">compétences</span> et ma <span class="text-blue-300">créativité</span>.</p>
        <p class="script-num">4</p>
        <p class="script-text"></p>
        <p class="script-num">5</p>
        <p class="script-text">Je crois que la technologie a le pouvoir de transformer des vies, et j'ai hâte de contribuer à ce changement à travers mon travail.</p>
        <p class="script-num">6</p>
        <p class="script-text">Que ce soit en créant de beaux sites Web intuitifs ou en développant des solutions innovantes, je m'efforce toujours de repousser les limites de ce qui est possible.</p>
        <p class="script-num">7</p>
        <p class="script-text"></p>
        <p class="script-num">8</p>
        <p class="script-text">Alors que je continue de grandir et d'évoluer dans mon domaine, je suis ravi de voir où mon voyage me mène. Que vous soyez ici pour en savoir plus sur mon travail ou simplement pour dire bonjour, j'aimerais communiquer avec vous. Alors, n'hésitez pas à jeter un œil à mon portfolio, et commençons une conversation !</p>
      </div>
    </ScriptBox>
  </div>
  <FooterBox />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ScriptBox from "@/components/ScriptBox.vue";
import FooterBox from "@/components/FooterBox.vue";

export default {
  name: "HomeView",
  components: {FooterBox, ScriptBox, NavBar},
  data() {
    return {
      age: new Date(new Date().getTime() - new Date("2003-08-19").getTime()).getFullYear() - 1970,
    };
  },
}
</script>

<style scoped>

</style>