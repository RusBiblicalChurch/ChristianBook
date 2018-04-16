<template>
  <div id="book">
    <div class="shelf">
      <book-info @bookEvent="inc" v-for="book in books" :book="book"></book-info>
    </div>
    <div v-for="message in messages">{{message}}</div>
  </div>
</template>

<script>
  import BookInfo from './book_info.vue'
  export default {
    data: function () {
      let el = document.getElementById('books_list');
      let json = JSON.parse(el.getAttribute('data'));
      return{
        books: json,
        messages: []
      }
    },
    methods: {
      inc: function(message) { this.messages.push(message) }
    },
    components: {
      BookInfo: BookInfo
    }
  }
</script>

<style scoped>
  .shelf {
    display: flex;
    align-items: center;
    justify-content: left;
    /* You can set flex-wrap and
       flex-direction individually */
    flex-direction: row;
    flex-wrap: wrap;
    /* Or do it all in one line
      with flex flow */
    flex-flow: row wrap;
    /* tweak where items line
       up on the row
       valid values are: flex-start,
       flex-end, space-between,
       space-around, stretch */
    align-content: flex-end;
  }
</style>

