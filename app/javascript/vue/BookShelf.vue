<template>
  <div>
    <book-card v-for="book in books" :key="book.id" :book="book"/>
  </div>
</template>

<script>
  import BookCard from './BookCard'

  export default {
    props: {  
      books: Array
    },
    components: {
      BookCard: BookCard
    }
  }
</script>

<style scoped>
</style>
