<template>
  <div class="shop">
    <book-shelf></book-shelf>
  </div>
</template>

<script>
  import bookData from './books-data'
  import BookShelf from './BookShelf'

  export default {
    components: {
      BookShelf
    },
    created () {
      this.books = bookData.books
    }
  }
</script>

<style scoped>
  .shop {}
</style>
