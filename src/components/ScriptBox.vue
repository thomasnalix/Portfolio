<template>
  <div class="bg-[#1d1f21] w-full rounded-2xl pb-4 shadow-xl">
    <div class="flex items-center bg-[#14161b] rounded-t-2xl p-3">
      <div class="absolute flex gap-2">
        <span class="w-4 h-4 bg-red-500 rounded-2xl"></span>
        <span class="w-4 h-4 bg-yellow-500 rounded-2xl"></span>
        <span class="w-4 h-4 bg-green-500 rounded-2xl"></span>
      </div>
      <h3 class="text-center w-full font-console text-lg">{{ title }}</h3>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "ScriptBox",
  props: {
    title: {
      type: String,
      default: "readme.ts",
    },
  },
}
</script>

<style scoped>

</style>