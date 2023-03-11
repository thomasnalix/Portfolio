<template>
  <NavBar />
  <template v-if="projectDesc">
    <div class="flex flex-col gap-10 flex duration-100 mt-20 sm:w-3/4 w-11/12 mx-auto">
      <div class="gap-5 relative w-full rounded-2xl p-5">
        <div class="flex flex-col gap-5">
          <h1 class="text-4xl font-bold text-center">{{ project.title }} - <span class="font-light">{{ project.date}}</span></h1>
          <span class="h-[1px] w-full bg-gray-500"></span>
          <p class="text-xl text-center">{{ project.description }}</p>
          <p></p>

        </div>
        <div class="overflow-hidden z-[-1] bg-white opacity-20 right-0 top-0 absolute w-full h-full rounded-2xl">
          <img class="blur-3xl saturate-[5] h-full w-full select-none" :src="require('@/assets/img/' + this.project.image + '.png')" alt="Project Image">
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-10 flex duration-100 mt-20 sm:w-3/4 w-11/12 mx-auto">
      <div class="gap-5 flex flex-col relative w-full rounded-2xl p-5">
        <h1 class="text-4xl font-bold text-center">Description</h1>
        <span class="h-[1px] w-full bg-gray-500"></span>
        <div class="flex flex-col gap-5">
          <p class="text-xl text-center">{{ projectDesc.description }}</p>
        </div>
        <div class="overflow-hidden z-[-1] bg-white opacity-20 right-0 top-0 absolute w-full h-full rounded-2xl">
          <img class="blur-3xl saturate-[5] h-full w-full select-none" :src="require('@/assets/img/' + this.project.image + '.png')" alt="Project Image">
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-10 flex duration-100 mt-20 sm:w-3/4 w-11/12 mx-auto">
      <div class="gap-5 flex flex-col relative w-full rounded-2xl p-5">
        <h1 class="text-4xl font-bold text-center">Images</h1>
        <span class="h-[1px] w-full bg-gray-500"></span>
        <div class="flex flex-wrap gap-5">
          <img class="w-56 h-56 rounded-2xl" :src="require('@/assets/img/' + this.project.image + '.png')" alt="Project Image">
          <img class="w-56 h-56 rounded-2xl" :src="require('@/assets/img/' + this.project.image + '.png')" alt="Project Image">
          <img class="w-56 h-56 rounded-2xl" :src="require('@/assets/img/' + this.project.image + '.png')" alt="Project Image">
          <img class="w-56 h-56 rounded-2xl" :src="require('@/assets/img/' + this.project.image + '.png')" alt="Project Image">
          <img class="w-56 h-56 rounded-2xl" :src="require('@/assets/img/' + this.project.image + '.png')" alt="Project Image">
        </div>
        <div class="overflow-hidden z-[-1] bg-white opacity-20 right-0 top-0 absolute w-full h-full rounded-2xl">
          <img class="blur-3xl saturate-[5] h-full w-full select-none" :src="require('@/assets/img/' + this.project.image + '.png')" alt="Project Image">
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="flex flex-col gap-7 items-center justify-center h-screen">
      <h1 class="text-6xl font-bold text-center">404</h1>
      <p class="text-2xl font-bold text-center">Page not found</p>
    </div>
  </template>

  <FooterBox />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBox from "@/components/FooterBox.vue";

export default {
  name: "ProjectView",
  components: { FooterBox, NavBar},
  created() {
    this.project = this.projects.find(p => p.id === Number(this.id));
    this.projectDesc = this.projectsDesc.find(p => p.id === Number(this.id));
  },
  data() {
    return {
      projects: require("@/assets/data/projects.json"),
      projectsDesc: require("@/assets/data/projectsDesc.json"),
      id: this.$route.params.id,
      projectDesc: {},
      project: {},
    };
  }
}
</script>

<style scoped>

</style>