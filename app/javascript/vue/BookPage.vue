<template>
  <ul>
  	<li v-for="book in book" :key="book.id">
  	  {{ value.id }}
  	</li>
</ul>
</template>


<script>
  import _ from 'lodash'
  import booksData from './books-data'

  export default {
    data () {
      return {
        books: [],
        book: null
      }
    },
    created () {
      var bookId = parseInt(this.$route.params.id)

      booksData
        .then((books) => {
          this.books = books
          this.book = _.find(this.books, { id: bookId })
        })
        .catch((message) => window.alert(message))
    }
  }

</script>

<style scoped>
</style>
