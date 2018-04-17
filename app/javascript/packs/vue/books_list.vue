<template>
  <div>
    <div id="books-list">
      <book-info v-for="book in books" :key="book.id"
        :book="book" ></book-info>
    </div>
  </div>
</template>

<script>
  import BookInfo from './book_info.vue'
  
  export default {

    data: function () {
      let el = document.getElementById('books_list');
      let json = JSON.parse(el.getAttribute('data'));
      return{
        books: json
      }
    },
    
    components: {
      BookInfo: BookInfo
    },

  }
</script>

<style scoped>
</style>