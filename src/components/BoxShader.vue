<template>
  <div class="flex flex-col gap-10 flex duration-100 mt-20 sm:w-3/4 w-11/12 mx-auto">
    <div v-wave="{
        color: 'currentColor',
        easing: 'ease-out',
        duration: 0.4,
        dissolveDuration: 0.15,
        initialOpacity: 0.1,
        finalOpacity: 0.05,
        cancellationPeriod: 75,
      }" class="gap-5 flex flex-col relative w-full rounded-2xl p-5">
      <h1 class="text-4xl font-bold text-center">{{ title }}<span class="font-normal" v-if="complement"> - {{ complement }}</span></h1>
      <span class="h-[1px] w-full bg-gray-500"></span>
      <slot></slot>
      <div class="overflow-hidden z-[-1] bg-white opacity-20 right-0 top-0 absolute w-full h-full rounded-2xl">
        <img class="blur-3xl saturate-[5] h-full w-full select-none" :src="require('@/assets/img/' + this.project.image + '/' + this.project.image + 'Cover.png')" alt="Project Image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxShader",
  props: {
    project: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    complement: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>

</style>