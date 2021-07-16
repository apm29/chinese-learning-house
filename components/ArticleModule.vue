<template>
 <div>
   <div v-for='article of articles' :key='article.path'
        class='tw-px-4 md:tw-px-0'>
     <article class='tw-text-left tw-flex-col tw-flex tw-prose tw-items-stretch'>
       <NuxtLink class='hover:tw-cursor-pointer hover:tw-text-red-500' :to='{name:"index-post-path",params:{path:article.path.replace("/","")}}' tag='h3'>
         {{ article.title }}
       </NuxtLink>
       <p v-if='article.text' class='tw-font-normal'>
         {{ article.text.substr(0, 300) }}...
       </p>
       <p v-if='article.toc'>
         <template v-for='toc of article.toc.slice(0,5)'>
                <span
                  v-if='toc.text' :key='toc.id'
                  class='tw-mr-1 hover:tw-underline hover:tw-cursor-pointer'
                  @click='$router.push({name:"category-category",params:{category:toc.text}})'
                >
                #{{ toc.text }}
              </span>
         </template>
       </p>
       <time class='tw-self-end'>{{ article.createdAt | filterTime }}</time>
     </article>
     <hr class='tw-my-4' />
   </div>
 </div>
</template>
<script>
export default {
  name: 'ArticleModule',
  props:{
    articles:{
      type:Array,
      default:function(){
        return []
      }
    }
  }
}
</script>
