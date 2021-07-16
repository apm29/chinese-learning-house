<template>
  <div class='tw-bg-white tw-relative tw-flex tw-flex-col tw-items-center'>
    <div class='bg-light__lower'>
    </div>
    <div class='bg-light__upper'>
    </div>
    <div class='tw-px-32 tw-py-16 tw-mt-16 tw-transform tw-text-center tw-skew-x-0  tw-w-full md:tw-w-1/2'>
      <h2 class='tw-text-3xl tw-text-white'>Contact Us</h2>
      <div class='tw-text-lg tw-text-white tw-my-6'>Get in touch with our team to discuss your plan.</div>
      <div class='tw-grid tw-grid-cols-2 tw-gap-4'>
        <label>
          <input class='input-transparent__main' placeholder='First Name' />
        </label>
        <label>
          <input class='input-transparent__main' placeholder='Last Name' />
        </label>
        <label class='tw-col-span-2'>
          <input class='input-transparent__main' placeholder='EMail' />
        </label>
        <label class='tw-col-span-2'>
          <input class='input-transparent__main' placeholder='Phone' />
        </label>
      </div>
      <v-btn class='tw-mt-10' dark>Submit</v-btn>
    </div>
    <div class='tw-grid tw-grid-cols-3 tw-mt-16 tw-gap-6 tw-w-full tw-px-32 tw-transform tw-skew-x-0'>
      <div class='price-card__body'>
        <img alt='price1' src='processing.svg' />
        <div class='price-card__desc'>
          "Thank heaven for startups; without them we'd never have any advances."
        </div>
        <div class='price-card__price'>
          $269.9
        </div>
      </div>

      <div class='price-card__body'>
        <img alt='price1' src='price.svg' />
        <div class='price-card__desc'>
          Dealing with the problem of pure staff accumulation,
          all our researches ... point to an average increase of 5.75% per year.
        </div>
        <div class='price-card__price'>
          $399.9
        </div>
      </div>

      <div class='price-card__body'>
        <img alt='price1' src='process.svg' />
        <div class='price-card__desc'>
          You don't have to think too hard when you talk to teachers.
        </div>
        <div class='price-card__price'>
          $699.9
        </div>
      </div>
    </div>
    <ContactSliver />
  </div>
</template>

<script>
import ContactSliver from '~/components/ContactSliver'

export default {
  name: 'home',
  components: { ContactSliver },
}
</script>

<style scoped>
.bg-light__lower {
  height: 105vh;
  width: 150vw;
  @apply
  tw-bg-gradient-to-r
  tw-absolute
  tw-transform
  tw--rotate-24
  tw-skew-x-12
  tw--top-1/3
  tw--left-1/4
  tw-from-blue-100
  tw-to-purple-100;
}

.bg-light__upper {
  height: calc(105vh - 30px);
  width: calc(150vw - 30px);
  margin-left: 20px;
  @apply
  tw-bg-gradient-to-r
  tw-absolute
  tw-transform
  tw--rotate-24
  tw-skew-x-12
  tw--top-1/3
  tw--left-1/4
  tw-from-blue-400
  tw-to-purple-600;
}

.input-transparent__main {
  @apply
  tw-outline-none
  tw-border-none
  tw-ring-0
  focus:tw-ring-2
  focus:tw-ring-purple-800
  tw-rounded
  tw-text-white
  tw-bg-gray-200
  tw-bg-opacity-25
  tw-px-3
  tw-py-2
  tw-w-full
}

input::placeholder {
  @apply tw-text-gray-100
}

.price-card__body {
  @apply
  tw-rounded-2xl
  tw-shadow-lg
  tw-bg-white
  tw-overflow-visible
  tw-flex
  tw-flex-col
  tw-items-center
  tw-pb-12;
}
.price-card__body > img{
  @apply tw-w-2/3 tw-transform tw--translate-y-16 tw-h-64
}
.price-card__price{
  @apply
  tw-text-3xl
  tw-font-extrabold
  tw-my-4;
}
.price-card__desc{
  @apply
  tw-font-light
  tw-text-xl
  tw-text-gray-700
  tw-px-8
  tw-flex-grow;
}
</style>
