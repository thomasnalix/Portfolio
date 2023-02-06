<template>
    <a class="bg-[#00000030] rounded-2xl border-2 border-[#1b2434] p-2 lg:px-4 hover:bg-[#2a354826] duration-75" :href="language.link">{{ language.name }}</a>
</template>

<script>
export default {
  name: "LanguageCard",
  props: {
    language: {
      type: Object,
      required: true,
    },
  },

}
</script>

<style scoped>

</style>