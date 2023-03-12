<template>
  <div class="card p-3 rounded-2xl flex items-center shadow-md h-full duration-30 md:h-72 h-full lg:ml-8 shadow-2xl">
    <div class="flex z-10 w-full items-center pr-4">
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
      <div class="flex flex-col w-full gap-2">
        <div class="flex justify-between">
          <h2 class="text-xl">{{ project.date }}</h2>
          <a :href="project.link"><img class="w-8 hover:scale-105 duration-100" src="@/assets/img/githubLogo.png" alt="github logo"></a>
        </div>
        <router-link :to="`/projects/${project.id}`">
        <h1 class="font-bold text-3xl">{{ project.title }}</h1>
        <p class="break-words mb-5">{{ project.description }}</p>
        </router-link>
        <div class="flex justify-between md:flex-row md:gap-2 gap-5 flex-col items-center">
          <div class="flex flex-wrap justify-center md:justify-start gap-2">
            <LanguageCard v-for="language in project.languages" :key="language.name" :language="language" />
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden bg-white opacity-5 right-0 top-0 absolute w-full h-full rounded-2xl">
      <img class="blur-3xl saturate-[5] h-full w-full select-none" :src="image" alt="Project Image">
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
      image: require("@/assets/img/" + this.project.image + "/" + this.project.image + "Cover.png"),
    }
  }
}
</script>

<style scoped>

</style>