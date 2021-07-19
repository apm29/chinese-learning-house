<template>
  <div class='tw-w-screen tw-h-screen tw-overflow-hidden tw-flex tw-flex-col md:tw-flex-row'>
    <!--PC端导航菜单-->
    <div class='menu-left__container'>
      <AppLogo />
      <MainNavigation />
      <v-spacer />
      <SiteInfo />
      <ContactSliver />
    </div>
    <div id='scroll-content' class='main-content__wrapper'>
      <!--移动端导航菜单-->
      <div class='menu-top__container'>
        <i class='mdi-menu mdi tw-text-white tw-text-2xl' @click='show = !show'></i>
        <v-expand-transition>
          <div v-if='show' class='tw-flex-col tw-flex tw-w-full tw-pt-3 tw-bg-white tw-rounded'>
            <AppLogo class='tw-self-stretch' />
            <MainNavigation class='tw-self-stretch' />
            <v-spacer />
            <SiteInfo class='tw-self-stretch' />
            <ContactSliver class='tw-self-stretch' />
          </div>
        </v-expand-transition>
      </div>
      <NuxtChild></NuxtChild>
      <!--底部导航菜单-->
      <FootNavigation />
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo'
import SiteInfo from '~/components/SiteInfo'
import ContactSliver from '~/components/ContactSliver'
import MainNavigation from '~/components/MainNavigation'
import FootNavigation from '~/components/FootNavigation'

export default {
  components: { FootNavigation, MainNavigation, ContactSliver, SiteInfo, AppLogo },
  asyncData(ctx) {},

  data() {
    return {
      show: false
    }
  },

  watch:{
    $route:{
      deep:true,
      handler:function(){
        this.show = false;
      }
    }
  },

  methods: {}
}
</script>
<style scoped>
.menu-left__container {
  @apply tw-px-4 tw-py-8  tw-text-center tw-flex-shrink-0
  md:tw-flex tw-flex-col tw-items-center tw-shadow-lg tw-hidden;
}

.menu-top__container {
  @apply md:tw-hidden tw-px-4 tw-py-3
  tw-flex-shrink-0 tw-flex tw-flex-col
  tw-items-start tw-shadow-lg tw-bg-gradient-to-b tw-from-blue-500 tw-to-purple-600;
}

.menu-column__wrapper > *:first-child {
  @apply tw-font-normal tw-text-gray-700;
}

.main-content__wrapper {
  @apply tw-h-screen tw-flex-grow tw-overflow-y-auto;
}
</style>
