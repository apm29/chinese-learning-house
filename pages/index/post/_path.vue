<template>
  <div class='tw-bg-white'>
    <PostTop :title='page.title'/>
    <article  class="tw-prose tw-pt-10 tw-prose-sm sm:tw-prose lg:tw-prose-lg xl:tw-prose-2xl tw-mx-auto">
      <nuxt-content class="tw-prose tw-prose-sm sm:tw-prose lg:tw-prose-lg xl:tw-prose-2xl tw-mx-auto"
                    :document="page" />
    </article>
    <ContactSliver/>
  </div>

</template>

<script>
import ContactSliver from '~/components/ContactSliver'
import PostTop from '~/components/PostTop'
export default {
  components: { PostTop, ContactSliver },
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
