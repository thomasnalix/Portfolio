<template>
  <NavBar />
  <template v-if="projectDesc">
    <div class="flex flex-col gap-10 flex w-3/4 mx-auto">
      <h1 class="text-6xl font-bold text-center mb-10 mt-10">{{ project.title }}</h1>
      <ScriptBox title="metadata.ts">
        <div class="grid code-line mt-10 text-lg font-console">
          <p class="script-num">1</p>
          <p class="script-text">Title: {{ project.title }}</p>
          <p class="script-num">2</p>
          <p class="script-text">Date: {{ project.date }}</p>
          <p class="script-num">3</p>
          <a class="script-text" :href="project.link">Link: <span class="text-blue-300">{{ project.link }}</span></a>
          <p class="script-num">4</p>
          <p></p>
          <p class="script-num">5</p>
          <p class="script-text">Description: {{ project.description }}</p>
          <p class="script-num">6</p>
          <p></p>
          <p class="script-num">7</p>
          <p class="script-text">Image:</p>
          <p class="script-num">8</p>
          <img class="w-96 rounded-xl" :src="require('@/assets/img/' + this.project.image + '.png')" alt="project image">
        </div>
      </ScriptBox>
      <h1 class="text-6xl font-bold text-center mb-10 mt-10">Description</h1>
      <p>{{ projectDesc.description }}</p>
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
import ScriptBox from "@/components/ScriptBox.vue";

export default {
  name: "ProjectView",
  components: {ScriptBox, FooterBox, NavBar},
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