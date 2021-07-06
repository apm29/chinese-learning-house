import Vue from "vue"

import * as filters from "../assets/filters.js"

Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})
