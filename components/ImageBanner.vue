<template>
  <div class='banner w-full overflow-hidden md:h-96 h-72 bg-gray-600 relative'>
    <div ref='slide' class='swiper-wrapper'>
      <div
        v-for='image of images'
        :key='image.url'
        :style='{backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image.url})`,backgroundSize:"100% auto"}'
        class='swiper-slide object-cover bg-no-repeat overflow-x-hidden'
      >
        <h2 class='select-none uppercase absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-3xl md:text-6xl font-bold text-white'>{{image.title}}</h2>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
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
      swiper: null
    }
  },
  mounted() {
    this.swiper = new Swiper('.banner', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 4200,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },

      effect: 'coverflow',

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

    function replayAnimation() {
      this.$refs.slide?.children?.forEach(el => {
        el.classList.add('animate-pulse-once')
        setTimeout(() => {
          el.classList.remove('animate-pulse-once')
        }, 1800)
      })
    }
    replayAnimation.call(this)
    this.swiper.on("slideChange",(swiper)=>{
      replayAnimation.call(this)
    })

  }
}
</script>

<style>
.banner > .swiper-pagination{
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner > .swiper-pagination > .swiper-pagination-bullet {
  background-color: rgba(255,255,255,0.7);
  width: 10px;
  height: 10px;
  transition: all 0.2s;
}

.banner > .swiper-pagination > .swiper-pagination-bullet-active {
  background-color: white;
  width: 14px;
  height: 14px;
}
.swiper-button-next {
  --swiper-navigation-size: 1.5rem;
  @apply text-purple-300;
}

.swiper-button-prev {
  --swiper-navigation-size: 1.5rem;
  @apply text-purple-300
}
.banner .animate-pulse-once{
  animation:pulse-once 1.4s  ease-in 0s 1 normal none running ;
}
@keyframes pulse-once {
  0% {
    transform: scale(1.2,1.2);
    transform-origin: 0 0;
  }
  40% {
    transform: scale(1.2,1.2);
    transform-origin: 0 0;
  }

  100%{
    transform: scale(1.0,1.0);
    transform-origin: 0 0;
  }
}
</style>
