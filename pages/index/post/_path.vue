<template>
  <div class='pt-20 bg-white' style='height: 3000px'>
    <article  class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
      <h1>{{ page.title }}</h1>
      <nuxt-content class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
                    :document="page" />
    </article>
  </div>

</template>

<script>
export default {
  props:["path"],
  async asyncData ({ $content,route }) {
    const page = await $content(route.params.path).fetch()

    return {
      page
    }
  },
  data(){
    return {
      page:{}
    }
  },
  mounted() {
    window.scrollTo({top:0})
    const scrollContent = document.getElementById("scroll-content")
    if(scrollContent) {
      scrollContent.scrollTo({ top: 0 })
    }
  }
}
</script>
