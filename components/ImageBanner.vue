<template>
  <div class='banner w-full overflow-hidden md:h-96 h:72 bg-gray-600 relative'>
    <div class='swiper-wrapper'>
      <div
        v-for='image of images'
        :key='image.url'
        :style='{backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image.url})`,backgroundSize:"100% auto"}'
        class='swiper-slide object-cover bg-no-repeat'
      >
        <h2 class='uppercase absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-3xl md:text-6xl font-bold text-white'>{{image.title}}</h2>
      </div>
    </div>
    <div class='swiper-pagination'></div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'

export default {
  name: 'ImageBanner',
  data() {
    return {
      images: [
        {
          url:'https://images.unsplash.com/photo-1600195077909-46e573870d99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhcm58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&w=1080&q=70',
          title:"Never pay a compliment as if expecting a receipt."
        },
        {
          url:'https://images.unsplash.com/photo-1593600269510-0816682e80da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhcm58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=70',
          title:"The more control, the more that requires control."
        },
        {
          url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlYXJufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=70',
          title:'It is easier to get forgiveness than permission.'
        }
      ],
    }
  },
  mounted() {
    const swiper = new Swiper('.banner', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 4200,
        pauseOnMouseEnter: true
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })

  }
}
</script>

<style>
.swiper-pagination .swiper-pagination-bullet {
  background-color: #444444;
  width: 12px;
  height: 12px;
}

.swiper-pagination .swiper-pagination-bullet-active {
  background-color: white;
}
</style>
