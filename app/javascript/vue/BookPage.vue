<template>
  <ul>
    <li v-for="book in book" :key="book.id">
      {{ book }}
    </li>
  </ul>
</template>

<script>
  import booksData from './books-data'

  export default {
    data () {
      return {
        book: null
      }
    },
    created () {
      var bookId = parseInt(this.$route.params.id)

      booksData.getById(bookId)
        .then((book) => { this.book = book })
        .catch((message) => window.alert(message))
    }
  }

</script>
