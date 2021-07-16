<template>
  <div class='tw-flex tw-flex-col tw-items-center'>
    <ImageBanner></ImageBanner>

    <div class='tw-grid xl:tw-grid-cols-2 2xl:tw-grid-cols-4 tw-grid-cols-1 tw-gap-4 tw-w-3/4 tw-mt-8'>
      <h2 class='tw-font-bold tw-text-gray-600 tw-text-3xl tw-col-span-full'>Columns(外链)</h2>
      <div v-for='item of images' :key='item.url' class='tw-overflow-hidden'>
        <v-img
          alt='img' :src='item.url'
          class='img img-hover-blur tw-bg-gray-100 tw-rounded-xl tw-overflow-clip tw-w-full tw-h-full tw-transform tw-transition-transform hover:tw-scale-120 tw-cursor-pointer'
          gradient='rgba(0,0,0,0.7),rgba(0,0,0,0.1)'
          @click='toLink(item.link)'
        >
          <template #placeholder>
            <div
              class='tw-flex tw-h-full tw-items-center tw-justify-center'
            >
              <v-progress-circular
                indeterminate
                class='tw-text-gray-300 tw-text-opacity-60'
              ></v-progress-circular>
            </div>
          </template>
          <div
            class='tw-absolute tw-top-0 tw-left-0 tw-text-2xl tw-font-bold tw-text-white tw-px-4 tw-py-6 tw-w-full tw-h-full'>
            <h3>{{ item.title }}</h3>
          </div>
        </v-img>
      </div>
    </div>

    <ContactSliver />
  </div>
</template>

<script>
import ImageBanner from '~/components/ImageBanner'
import ContactSliver from '~/components/ContactSliver'

export default {
  name: 'index',
  components: { ContactSliver, ImageBanner },
  data() {
    return {
      images: [
        {
          url: 'https://source.unsplash.com/random/800x400/?time',
          link: 'https://mp.weixin.qq.com/s/JlIGBQ1o_LhUXtZadLzVYg',
          title: 'In Search of Lost Time '
        },
        {
          url: 'https://source.unsplash.com/random/800x400/?view',
          link: 'https://mp.weixin.qq.com/s/NvSskqfsTD15lH-xkcJRvg',
          title: 'The Odyssey'
        },
        {
          url: 'https://source.unsplash.com/random/800x400/?chinese',
          link: 'https://mp.weixin.qq.com/s/2wya0NDRJfzf0fcOhTs_4A',
          title: 'Ulysses'
        },
        {
          url: 'https://source.unsplash.com/random/800x400/?girl',
          link: 'https://mp.weixin.qq.com/s/XODJHhMVT_1m8F0iCuS9XQ',
          title: 'Don Quixote'
        },
        {
          url: 'https://source.unsplash.com/random/800x400/?book',
          link: 'https://mp.weixin.qq.com/s/TY2j7A7WV4v_MpIcA6EpQg',
          title: 'One Hundred Years of Solitude '
        },
        {
          url: 'https://source.unsplash.com/random/800x400/?mountain',
          link: 'https://mp.weixin.qq.com/s/F7Srmqu0R2IR_vZ8_pZbRA',
          title: 'The Great Gatsby '
        },
        {
          url: 'https://source.unsplash.com/random/800x400/?sea',
          link: 'https://mp.weixin.qq.com/s/los2o6h2Udtox73AAJqJDQ',
          title: 'Moby Dick'
        },
        {
          url: 'https://source.unsplash.com/random/800x400/?war',
          link: 'https://mp.weixin.qq.com/s/Em5xDL3S2y6_CfrT3cLYgg',
          title: 'War and Peace'
        }
      ]
    }
  },
  methods: {
    toLink(url) {
      window.location.href = url
    }
  }
}
</script>

<style scoped>
.blur-xs {
  --tw-blur: blur(1px);
}

.img-hover-blur:hover {
  animation: animation-hover-blur 1.2s ease-in 0s 1 normal none running;
}

@keyframes animation-hover-blur {
  0% {
    filter: none;
  }

  30% {
    filter: blur(1px);
  }

  100% {
    filter: none;
  }
}

.img {
  background: ;
}
</style>
