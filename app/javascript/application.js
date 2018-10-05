import Vue from 'vue'
import App from 'vue/App'
import { router } from './vue/router'

document.addEventListener('DOMContentLoaded', () => {
  return new Vue({
    router,
    el: '#books_app',
    render: h => h(App)
  })
})
