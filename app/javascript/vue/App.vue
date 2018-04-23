<template>
  <div class="shop">
    <book-shelf :books="books"/>
  </div>
</template>

<script>
  import booksData from './books-data'
  import BookShelf from './BookShelf'

  export default {
    data() {
      return {
        books: []
      }
    },
    components: {
      BookShelf
    },
    created() {
      booksData.then((response) => {
        this.books = response.data
      })
    }
  }
</script>

<style scoped>
  .shop {}
</style>
