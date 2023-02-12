<template>
  <div class="card duration-300 flex md:h-72 h-full lg:ml-8 items-center shadow-2xl">
    <div class="folder hidden lg:block relative right-10 w-72 h-52">
      <div class="absolute overflow-hidden duration-300 w-52 h-52 opacity-50 rounded-2xl">
        <img class="h-full select-none min-w-fit" :src="image" alt="Project Image">
      </div>
      <div class="subfolder overflow-hidden duration-300 absolute w-52 opacity-70 h-52 bg-slate-500 rounded-2xl">
        <img class="h-full select-none min-w-fit" :src="image" alt="Project Image">
      </div>
      <div class="cover absolute min-w-[208px] duration-300 w-52 h-52 flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl">
        <img class="h-full min-w-fit" :src="image" alt="Project Image">
      </div>
    </div>
    <div class="flex flex-col w-full gap-2 pr-4">
      <div class="flex justify-between">
        <h2 class="text-xl">{{ project.date }}</h2>
        <a :href="project.link"><img class="w-8 hover:scale-105 duration-100" src="@/assets/img/githubLogo.png" alt="github logo"></a>
      </div>
      <h1 class="font-bold text-3xl">{{ project.title }}</h1>
      <p class="break-words mb-5">{{ project.description }}</p>
      <div class="flex justify-between md:flex-row md:gap-2 gap-5 flex-col items-center">
        <div class="flex flex-wrap justify-center md:justify-start gap-2 w-full">
          <LanguageCard v-for="language in project.languages" :key="language.name" :language="language" />
        </div>
        <router-link :to="`/projects/${project.id}`" class="btn">More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageCard from "@/components/LanguageCard.vue";

export default {
  name: "ProjectCard",
  components: {LanguageCard},
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      image: require("@/assets/img/" + this.project.image + ".png"),
    }
  }
}
</script>

<style scoped>

</style>