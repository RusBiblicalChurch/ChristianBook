/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import BooksList from '.vue/books_list.vue'


/* document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#books_list',
    render: h => h(BooksList)
  })
}) */

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#books_list',
    data(){
    },/* 
    template: '<books-list :books="books"></books-list>', */
    render: h => h(BooksList)
  })
})



/* new Vue({
  el: "#books_list",
  template: `<BooksList :books='books'/>`,
  components: { BooksList },
  data: function () {
    let el = document.getElementById('books_list');
    let books_json = JSON.parse(el.getAttribute('data'));
    return{
      books: books_json
    }
  },
  data: { books: books_list() } 
}); */

/* let el = document.getElementById('books_list');
let books_json = JSON.parse(el.getAttribute('data'));
return{
  books: books_json
} */



// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>



// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks';
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
