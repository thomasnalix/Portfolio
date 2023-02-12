<template>
  <NavBar />
  <div class="flex flex-col items-center duration-100 sm:w-3/4 w-11/12 mx-auto">
    <div class="h-screen flex flex-col items-center justify-evenly gap-16">
      <div class="flex flex-col gap-14 items-center">
        <div class="flex flex-col gap-4">
          <h1 class="font-bold duration-100 sm:text-8xl text-6xl text-center">Hello, I'm</h1>
          <div class="typewriter">
            <h1 class="font-bold duration-100 sm:text-8xl text-4xl text-center">Thomas Nalix</h1>
          </div>
        </div>
        <h2 class="sm:text-2xl duration-100 text-center text-xl text-gray-200">I'm a student in computer science.</h2>
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
    <ScriptBox title="readme.txt">
      <div class="grid code-line mt-10 text-lg font-console">
        <p class="script-num">1</p>
        <p class="script-text">Hello there! I'm Thomas Nalix, a <span class="text-pink-300">{{ age }}</span>-year-old computer science student at the Montpellier's BUT. As someone who's always been fascinated by the digital world, I've found my true calling in web development.</p>
        <p class="script-num">2</p>
        <p class="script-text">Over the past few years, I've dedicated myself to learning and mastering different frameworks such as <span class="text-teal-300">Angular</span>, <span class="text-teal-300">Vue</span>, and <span class="text-teal-300">Laravel</span>.</p>
        <p class="script-num">3</p>
        <p class="script-text">My passion for web development has led me to take on various projects, where I've had the opportunity to showcase my <span class="text-blue-300">skills</span> and <span class="text-blue-300">creativity</span>.</p>
        <p class="script-num">4</p>
        <p class="script-text"></p>
        <p class="script-num">5</p>
        <p class="script-text">I believe that technology has the power to transform lives, and I'm eager to contribute to this change through my work.</p>
        <p class="script-num">6</p>
        <p class="script-text">Whether it's through building beautiful and intuitive websites or developing innovative solutions, I'm always striving to push the boundaries of what's possible.</p>
        <p class="script-num">7</p>
        <p class="script-text"></p>
        <p class="script-num">8</p>
        <p class="script-text">As I continue to grow and evolve in my field, I'm excited to see where my journey takes me. Whether you're here to learn more about my work or simply to say hello, I'd love to connect with you. So, feel free to take a look around my portfolio, and let's start a conversation!</p>
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