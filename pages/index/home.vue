<template>
  <div class="bg-purple-200" style="height: 3000px"></div>
</template>

<script>
export default {
  name: 'home',
  asyncData({ redirect }) {
    redirect({path:"/"})
  }
}
</script>

<style scoped></style>
