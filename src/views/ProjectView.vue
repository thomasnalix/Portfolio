<template>
  <NavBar />
  <template v-if="project">
    <BoxShader data-aos="fade-up" :project="project" :title="project.title" :complement="project.date">
      <div>
        <p class="text-lg font-normal">{{ project.description }}</p>
      </div>
    </BoxShader>
    <BoxShader data-aos="fade-up" :project="project" title="Description">
      <!-- TODO : Add id in json for every child of explanation-->
      <div class="flex flex-col gap-6">
        <div v-for="desc in project.explanation" :key="desc.length" class="flex flex-col gap-2 markdown">
          <h1 class="text-2xl font-bold">{{ desc.title }} :</h1>
          <p v-html="compiledMarkdown(desc.content)" class="text-lg font-normal"></p>
        </div>
      </div>
    </BoxShader>

    <BoxShader data-aos="fade-up" :project="project" title="Images">
      <div class="flex flex-wrap gap-5">
        <img class="sm:max-w-xs rounded-2xl hover:scale-105 duration-200" v-for="img in project.images" :key="img.id" :src="require('@/assets/img/' + this.project.image + '/' + img.name + '.png')" alt="Project Image">
      </div>
    </BoxShader>
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
import BoxShader from "@/components/BoxShader.vue";
import {marked} from 'marked';

export default {
  name: "ProjectView",
  components: {BoxShader, FooterBox, NavBar},
  created() {
    this.project = this.projects.find(p => p.id === Number(this.id));
  },
  data() {
    return {
      projects: require("@/assets/data/projects.json"),
      id: this.$route.params.id,

      project: {},
    };
  },
  methods: {
    compiledMarkdown(content) {
      return marked(content);
    }
  }
}
</script>

<style scoped>

</style>