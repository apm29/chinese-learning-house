<template>
  <div class='bg-white flex flex-col items-center' style='height: 3000px'>
  </div>
</template>

<script>
export default {
  name: 'index',
  asyncData({ $content,redirect }) {
    // const articles = await $content('/', { text: true, deep: true }).
    //   only(['title', 'path', 'toc', 'text','createAt']).
    //   sortBy('createAt', 'desc').
    //   fetch()
    // const pageSize = 10
    // return {
    //   articles,
    //   total: articles.length,
    //   page: 1,
    //   pageSize: pageSize,
    //   pageTotal: Math.ceil(articles.length / pageSize)
    // }
    redirect({name:"index-post-page",params:{ page:1 }})
  }
}
</script>

<style scoped></style>
