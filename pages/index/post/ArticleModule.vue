<template>
 <div>
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
                  @click='$router.push({name:"category-category",params:{category:toc.text}})'
                >
                #{{ toc.text }}
              </span>
         </template>
       </p>
       <time class='self-end'>{{ article.createdAt | filterTime }}</time>
     </article>
     <hr class='my-4' />
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
