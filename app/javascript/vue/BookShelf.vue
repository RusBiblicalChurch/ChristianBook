<template>
  <div>
    <book-card v-for="book in books" :key="book.id" :book="book"/>
  </div>
</template>

<script>
  import BookCard from './BookCard'
  import booksData from './books-data'

  export default {
    data () {
      return {
        books: this.books
      }
    },
    components: {
      BookCard: BookCard
    },
    created () {
      booksData.getAll()
        .then((books) => { this.books = books })
        .catch((message) => window.alert(message))
    }
  }
</script>
