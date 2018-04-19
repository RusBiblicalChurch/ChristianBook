<template>
  <div>
    <div id="books_list">
      <book-info v-for="book in books" :key="book.id"
        :book="book"/>
    </div>
  </div>
</template>

<script>
  import BookInfo from './book_info.vue';
  import BooksData from './books_data.js'

  export default {
    props: {
      books: Object
    },
    data() {
      return {
        books: []
      }
    },
    components: {
      BookInfo: BookInfo
    },
    created(){
      this.books = BooksData.books
    },
  }
</script>

<style scoped>
</style>
