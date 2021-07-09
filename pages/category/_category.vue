<template>
  <div>
    <div class='bg-white flex flex-col items-center' style='height: 3000px'>
      <PostTop />
      <div class='flex pt-12 w-screen md:w-4/5'>
        <CompanyModule />
        <div v-if='articles' class='flex flex-col items-stretch  w-screen md:w-4/5 overflow-x-hidden'>
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
import ArticleModule from '~/pages/index/post/ArticleModule'
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
