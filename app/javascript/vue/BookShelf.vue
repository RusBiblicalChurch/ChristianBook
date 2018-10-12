<template>
  <div>
    <book-card v-for="book in booksLocal" :key="book.id" :book="book"/>
  </div>
</template>

<script>
  import BookCard from './BookCard'
  import booksData from './books-data'

  export default {
    data () {
      return {
        booksLocal: this.books
      }
    },
    components: {
      BookCard: BookCard
    },
    created () {
      booksData.getAll()
        .then((books) => { this.booksLocal = books })
        .catch((message) => window.alert(message))
    }
  }
</script>
