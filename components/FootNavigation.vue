<template>
  <div class='tw-flex tw-justify-center tw-my-4 tw-w-full tw-flex-col md:tw-flex-row'>
    <div class='menu-column__wrapper'>
      <div>Contact Us</div>
      <NuxtLink to='/contact'>yjw999wow@email.com</NuxtLink>
      <NuxtLink to='/contact'>yjw999wow@email.com</NuxtLink>
      <NuxtLink to='/contact'>yjw999wow@email.com</NuxtLink>
    </div>
    <div class='menu-column__wrapper'>
      <div>Contact Us</div>
      <NuxtLink to='contact'>yjw999wow@email.com</NuxtLink>
      <NuxtLink to='contact'>yjw999wow@email.com</NuxtLink>
      <NuxtLink to='contact'>yjw999wow@email.com</NuxtLink>
    </div>
    <div class='menu-column__wrapper'>
      <div>Contact Us</div>
      <NuxtLink to='contact'>yjw999wow@email.com</NuxtLink>
      <NuxtLink to='contact'>yjw999wow@email.com</NuxtLink>
      <NuxtLink to='contact'>yjw999wow@email.com</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FootNavigation'
}
</script>
<style scoped>

.menu-column__wrapper {
  @apply tw-font-light tw-text-gray-400 tw-flex tw-flex-col tw-mx-4 tw-items-center;
}

.menu-column__wrapper > *:first-child {
  @apply tw-font-normal tw-text-gray-700;
}
</style>
