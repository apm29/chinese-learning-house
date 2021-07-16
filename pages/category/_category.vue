<template>
  <div>
    <div class='tw-bg-white tw-flex tw-flex-col tw-items-center' style='height: 3000px'>
      <PostTop />
      <div class='tw-flex tw-pt-12 tw-tw-w-screen md:tw-w-4/5'>
        <CompanyModule />
        <div v-if='articles' class='tw-flex tw-flex-col tw-items-stretch  tw-w-screen md:tw-w-4/5 tw-overflow-x-hidden'>
          <ArticleModule :articles='articles' />
        </div>
      </div>
    </div>
    <ContactSliver/>
  </div>
</template>

<script>
import ContactSliver from '~/components/ContactSliver'
import PostTop from '~/components/PostTop'
import CompanyModule from '~/components/CompanyModule'
import ArticleModule from '~/components/ArticleModule'
export default {
  name: 'CategoryDetail',
  components: { ArticleModule, CompanyModule, PostTop, ContactSliver },
  async asyncData({ $content, route }) {
    const res = await $content("",{
      text:true,
      deep:true,
    }).search(route.params.category).fetch()
    return {
      articles:res
    }
  }
}
</script>

<style scoped>

</style>
