import Vue from 'vue'
import App from 'vue/App'

document.addEventListener('DOMContentLoaded', () => {
  return new Vue({
    el: '#books_list',
    render: h => h(App)
  })
})
