<template>
  <div class="w-screen h-screen flex-col flex">
    <div class="w-screen shadow-2xl bg-white px-2 py-6">
      <div
        class='font-bolder text-2xl cursor-pointer'
        @click="$nuxt.$router.push('/')"
      >
        LEARNING HOUSE
      </div>
    </div>
    <Nuxt class="flex-grow"> </Nuxt>
  </div>
</template>

<script>
export default {
  name: 'Frame.vue',
}
</script>

<style scoped></style>
