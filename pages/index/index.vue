<template>
  <div class='flex flex-col items-center'>
    <ImageBanner></ImageBanner>

    <div class='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 w-3/4 mt-8'>
      <h2 class='font-bold text-gray-600 text-3xl col-span-full'>Columns</h2>
      <div v-for='url of images' :key='url' class='overflow-hidden'>
        <img
          alt='img' :src='url'
          class='img-hover-blur w-full h-full transform transition-transform hover:scale-120 cursor-pointer'
        >
      </div>
    </div>
  </div>
</template>

<script>
import ImageBanner from '~/components/ImageBanner'

export default {
  name: 'index',
  components: { ImageBanner },
  data() {
    return {
      images: [
        'http://qiniu.qskyabc.com/20200804172326_faa8f1d8beb27470ca9979cb7c177f35',
        'http://qiniu.qskyabc.com/20200804172327_c7b684c0336e9dc4b37920584f91ecb4',
        'http://qiniu.qskyabc.com/20200804172327_5fa8656c7ecb1066e5cabe7f91e932af',
        'http://qiniu.qskyabc.com/20200825180511_8f04de5b03317c16e46c51174b916946',
        'http://qiniu.qskyabc.com/20200812171214_0e5f3923b405cafc1abc0f158ef5eb7e',
        'http://qiniu.qskyabc.com/20200804172329_5fe7083bcd38597afb840f232816cc2c',
        'http://qiniu.qskyabc.com/20200804172329_cec14b01afa0a2beccd974fa598281b3',
        'http://qiniu.qskyabc.com/20200804172329_5aef89c4563403af759a0f938fcb0eb4'
      ]
    }
  }
}
</script>

<style scoped>
.blur-xs{
  --tw-blur:blur(1px);
}
.img-hover-blur:hover{
  animation:animation-hover-blur 0.8s  ease-in 0s 1 normal none running;
}
@keyframes animation-hover-blur {
  0% {
    filter: none;
  }

  30% {
    filter: blur(1px);
  }

  100%{
    filter: none;
  }
}
</style>
