<template>
  <div class='flex-container'>
    <v-divider class='tw-w-full tw-mt-8' />
    <NuxtLink class='link' exact to='/'>
      <v-icon class='tw-mr-3'>mdi-home</v-icon>
      Home
    </NuxtLink>
    <NuxtLink class='link' to='/post'>
      <v-icon class='tw-mr-3'>mdi-post</v-icon>
      Blog
    </NuxtLink>
    <NuxtLink class='link' to='/contact'>
      <v-icon class='tw-mr-3'>mdi-account-group</v-icon>
      Contact Us
    </NuxtLink>
    <v-divider class='tw-w-full' />
  </div>
</template>
<script>

export default {
  name: 'MainNavigation',
}
</script>
<style scoped>
.nuxt-link-active {
  color: rgb(156, 30, 207);
}

.nuxt-link-active .v-icon{
  color: rgb(156, 30, 207);
}

.link {
  @apply tw-self-start tw-transition-colors  tw-h-16 tw-flex tw-items-center tw-justify-center tw-px-4;
}

.flex-container {
  @apply tw-text-center tw-flex-shrink-0 tw-flex tw-flex-col tw-items-center ;
}
</style>
