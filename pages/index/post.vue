<template>
  <div class='pt-20 bg-white' style='height: 3000px'>
    <article  class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
      <h1>{{ page.title }}</h1>
      <nuxt-content class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
                    :document="page" />
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        For years parents have espoused the health benefits of eating garlic bread with cheese to their
        children, with the food earning such an iconic status in our culture that kids will often dress
        up as warm, cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
        springing up around the country.
      </p>
    </article>
  </div>

</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page
    }
  },
  data(){
    return {
      page:{}
    }
  }
}
</script>
