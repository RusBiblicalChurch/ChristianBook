<template>
  <div>
    <book-card v-for="book in books" :key="book.id" :book="book"/>
  </div>
</template>

<script>
  import BookCard from './BookCard'
  import booksData from './books-data'

  export default {
    props:{  
      books: Array
    },
    components: {
      BookCard: BookCard
    },
    created () {
      booksData
        .then((books) => { this.books = books })
        .catch((message) => window.alert(message))
    }
  }
</script>

<style scoped>
</style>
