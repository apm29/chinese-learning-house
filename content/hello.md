---
title: Getting started
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
---

Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

## Writing content

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

## Displaying content

Learn how to display your Markdown content with the `<nuxt-content>` component directly in your template: https://content.nuxtjs.org/displaying.

<NuxtLink to="/contact">Contact</NuxtLink>
<Tutorial></Tutorial>

```vue
<template>
  <div class="bg-purple-200" style="height: 3000px">
    <div class="relative">
      <img src="study.jpg" class="h-96 object-cover w-full relative" />
      <div
        class="
          text-6xl
          font-bold
          text-white
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
          w-5/6
          text-center
        "
      >
        Building a Culture of Excellence
        <div class="font-light text-xl">
          Vestibulum volutpat pretium libero. Suspendisse eu ligula.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style scoped></style>

```
