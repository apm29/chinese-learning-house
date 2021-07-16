<template>
  <div class='tw-bg-white tw-flex tw-flex-col tw-items-center' style='height: 3000px'>
    <PostTop />
    <div class='tw-flex tw-pt-12 tw-w-screen md:tw-w-4/5'>
      <CompanyModule />
      <div v-if='articles' class='tw-flex tw-flex-col tw-items-stretch  tw-w-screen md:tw-w-4/5 tw-overflow-x-hidden'>
        <ArticleModule :articles='articles' />
        <div class='tw-flex tw-font-bold tw-text-gray-300 tw-text-2xl tw-justify-end tw-mx-8'>
          <div
            v-if='page>1'
            class='tw-mx-2 tw-cursor-pointer tw-hover:underline tw-hover:text-red-400'
            @click='$router.replace({name:"index-post-page",params:{ page:page-1 }})'
          >PREV
          </div>
          <div
            v-for='pageIndex in pageTotal' :key='pageIndex'
            class='tw-mx-2 tw-cursor-pointer tw-hover:underline tw-hover:text-red-400'
            :class='pageIndex === page?"tw-text-black":""'
            @click='$router.replace({name:"index-post-page",params:{ page:pageIndex }})'
          >
            {{ pageIndex }}
          </div>
          <div v-if='page<pageTotal' class='mx-2 cursor-pointer hover:underline hover:text-red-400'
               @click='$router.replace({name:"index-post-page",params:{ page:page+1 }})'>NEXT
          </div>
        </div>
        <ContactSliver />
      </div>
    </div>
  </div>
</template>

<script>
import ContactSliver from '~/components/ContactSliver'
import PostTop from '~/components/PostTop'
import CompanyModule from '~/components/CompanyModule'
import ArticleModule from '~/pages/index/post/ArticleModule'

export default {
  name: 'Page',
  components: { ArticleModule, CompanyModule, PostTop, ContactSliver },
  async asyncData({ $content, route }) {

    const pageSize = 10
    const page = parseInt(route.params.page)
    const articles = await $content('', { text: true, deep: true }).
      only(['title', 'path', 'toc', 'text', 'createAt']).
      skip(pageSize * (page - 1)).
      limit(pageSize).
      sortBy('createAt', 'desc').
      fetch()
    const total = await $content('', { text: true, deep: true }).only([]).fetch()

    return {
      articles,
      total: total.length,
      page: page,
      pageTotal: Math.ceil(total.length / pageSize)
    }
  }
}
</script>

