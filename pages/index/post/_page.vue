<template>
  <div class='bg-white flex flex-col items-center' style='height: 3000px'>
    <div class='relative'>
      <img src='/study.jpg' class='md:h-96 h-80 object-cover w-full relative' />
      <div
        class='
          font-bold
          text-white
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
          w-5/6
          text-center
          md:text-6xl text-4xl
        '
      >
        Building a Culture of Excellence
        <div class='font-light text-xl'>
          Vestibulum volutpat pretium libero. Suspendisse eu ligula.
        </div>
      </div>
    </div>
    <div class='flex pt-12 w-screen md:w-4/5'>
      <div class='px-0 pt-32 prose flex flex-col items-center w-0 md:px-6 md:w-48 overflow-hidden transition-all'>
        <img class='w-28 h-28 rounded' src='http://jiayupearl.shop/avatar/default.png'>
        <h1>Apm29</h1>
        <blockquote class='w-32'>It's better to burn out than to fade away</blockquote>
      </div>
      <div v-if='articles' class='flex flex-col items-stretch  w-screen md:w-4/5 overflow-x-hidden'>
        <div v-for='article of articles' :key='article.path'
             class='px-4 md:px-0'>
          <article class='text-left flex-col flex prose items-stretch'>
            <h3 class='hover:cursor-pointer hover:text-red-600'
                @click='$router.push({name:"index-post-path",params:{path:article.path}})'>{{ article.title }}</h3>
            <p v-if='article.text' class='font-light'>
              {{ article.text.substr(0, 300) }}...
            </p>
            <p v-if='article.toc'>
              <template v-for='toc of article.toc.slice(0,5)'>
                <span
                  v-if='toc.text' :key='toc.id'
                  class='mr-1 hover:underline hover:cursor-pointer'
                >
                #{{ toc.text }}
              </span>
              </template>
            </p>
            <time class='self-end'>{{ article.createdAt | filterTime }}</time>
          </article>
          <hr class='my-4' />
        </div>
        <div class='flex font-bold text-gray-300 text-2xl justify-end mx-8'>
          <div
            v-if='page>1'
            class='mx-2 cursor-pointer hover:underline hover:text-red-400'
            @click='$router.replace({name:"index-post-page",params:{ page:page-1 }})'
          >PREV
          </div>
          <div
            v-for='pageIndex in pageTotal' :key='pageIndex'
            class='mx-2 cursor-pointer hover:underline hover:text-red-400'
            :class='pageIndex === page?"text-black":""'
            @click='$router.replace({name:"index-post-page",params:{ page:pageIndex }})'
          >
            {{ pageIndex }}
          </div>
          <div v-if='page<pageTotal' class='mx-2 cursor-pointer hover:underline hover:text-red-400'
               @click='$router.replace({name:"index-post-page",params:{ page:page+1 }})'>NEXT
          </div>
        </div>
        <div class='h-40 flex items-center justify-center cursor-pointer'>
          <div class='mr-2'>联系作者</div>
          <a target='_blank' href='https://github.com/apm29'>
            <i class='mdi mdi-github text-3xl mr-2 hover:text-blue-500'></i>
          </a>
          <a  target='_blank' href='mailto:yjw999wow@163.com'>
            <i class='mdi mdi-email text-3xl mr-2 hover:text-blue-500'></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  async asyncData({ $content, route }) {

    const pageSize = 10
    const page = parseInt(route.params.page)
    const articles = await $content('/', { text: true, deep: true }).
      only(['title', 'path', 'toc', 'text', 'createAt']).
      skip(pageSize * (page - 1)).
      limit(pageSize).
      sortBy('createAt', 'desc').
      fetch()
    const total = await $content('/', { text: true, deep: true }).only([]).fetch()

    return {
      articles,
      total: total.length,
      page: page,
      pageTotal: Math.ceil(total.length / pageSize)
    }
  }
}
</script>

<style scoped></style>
