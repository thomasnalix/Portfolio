<template>
  <NavBar />
  <h1 class="text-6xl font-bold text-center mb-10 mt-10">Project</h1>
  <div class="w-3/4 mx-auto" v-if="projects.length">
    <div class="flex flex-col gap-10" >
      <ProjectCard :project="project" :key="project.id" v-for="project in projects"/>
    </div>
  </div>
  <p v-else>Loading projects...</p>
  <FooterBox />
</template>

<script>
  import NavBar from "@/components/NavBar.vue";
  import ProjectCard from "@/components/ProjectCard.vue";
  import FooterBox from "@/components/FooterBox.vue";
  export default {
    name: "ProjectsView",
    components: {FooterBox, ProjectCard, NavBar},

    data() {
      return {
        projects: require("@/assets/data/projects.json"),
      };
    },
  }
</script>

<style scoped>

</style>