<template>
  <div class="tw-w-screen tw-h-screen tw-overflow-hidden">
    <div
      id="header"
      class="
        tw-w-screen
        tw-shadow-lg
        tw-px-2
        tw-fixed
        tw-top-0
        tw-left-0
        tw-right-0
        tw-text-white
        tw-transition-all
        tw-bg-opacity-20
        tw-flex
        tw-items-center
        tw-z-20
        sm:tw-text-2xl tw-text-lg
      "
    >
      <div
        class="tw-font-bolder sm:tw-text-2xl tw-text-lg tw-cursor-pointer tw-flex tw-items-center"
        @click="$nuxt.$router.push('/')"
      >
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24" class="tw-mr-3">
          <path
            fill="rgba(255, 135, 80, 1)"
            d="M18.36,2.64C20,2.64 21.36,4 21.36,5.64C21.36,7.29 20,8.64 18.36,8.64C16.71,8.64 15.36,7.29 15.36,5.64C15.36,5.34 15.41,5.06 15.5,4.8C14.43,4.29 13.25,4 12,4A8,8 0 0,0 4,12L4.04,12.84L2.05,13.05L2,12A10,10 0 0,1 12,2C13.69,2 15.28,2.42 16.67,3.16C17.16,2.83 17.74,2.64 18.36,2.64M18.36,4.64A1,1 0 0,0 17.36,5.64A1,1 0 0,0 18.36,6.64C18.92,6.64 19.36,6.19 19.36,5.64C19.36,5.08 18.92,4.64 18.36,4.64M5.64,15.36C7.29,15.36 8.64,16.71 8.64,18.36C8.64,18.66 8.59,18.94 8.5,19.2C9.57,19.71 10.75,20 12,20A8,8 0 0,0 20,12L19.96,11.16L21.95,10.95L22,12A10,10 0 0,1 12,22C10.31,22 8.72,21.58 7.33,20.84C6.84,21.17 6.26,21.36 5.64,21.36C4,21.36 2.64,20 2.64,18.36C2.64,16.71 4,15.36 5.64,15.36M5.64,17.36C5.08,17.36 4.64,17.81 4.64,18.36C4.64,18.92 5.08,19.36 5.64,19.36A1,1 0 0,0 6.64,18.36A1,1 0 0,0 5.64,17.36M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"
          />
        </svg>
        LEARNING HOUSE
      </div>
      <div class="tw-flex-grow"></div>
      <NuxtLink class="link tw-h-16 tw-flex tw-items-center tw-justify-center tw-px-4" to="/home">
        Home
      </NuxtLink>
      <NuxtLink class="link tw-h-16 tw-flex tw-items-center tw-justify-center tw-px-4" to="/post">
        Post
      </NuxtLink>
      <NuxtLink class="link tw-h-16 tw-flex tw-items-center tw-justify-center tw-px-4" to="/contact">
        Contact
      </NuxtLink>
    </div>
    <div id='scroll-content' class='tw-w-screen tw-h-screen tw-overflow-y-auto' @scroll='onScroll'>
      <NuxtChild></NuxtChild>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(ctx) {},

  methods: {
    onScroll(e) {
      const initial = e.target.scrollTop / 500
      const opacity = initial>1.2?1.2:initial
      const headerStyle = document.getElementById('header').style
      headerStyle.setProperty(
        'background',
        `linear-gradient(to bottom,rgba(60, 46, 222,${opacity}),rgba(156, 30, 207,${opacity-0.3}))`
      )
    },
  },
}
</script>
<style scoped>
/*.nuxt-link-active {*/
/*  background: linear-gradient(to bottom,rgba(229, 144, 57,1.0),rgba(229, 144, 57,0.3));*/
/*}*/
.link{
  flex-grow: 0 !important;
}
</style>
