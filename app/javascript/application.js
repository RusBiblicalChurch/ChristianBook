import Vue from 'vue'
import App from 'vue/App'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#books_list',
    render: h => h(App)
  })
})
