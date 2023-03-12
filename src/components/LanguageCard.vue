<template>
    <a class="bg-[#08122773] rounded-2xl border-2 border-[#08122773] p-2 lg:px-4 hover:bg-[#08122740] hover:border-[#08122740] duration-75" :href="language.link">{{ language.name }}</a>
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