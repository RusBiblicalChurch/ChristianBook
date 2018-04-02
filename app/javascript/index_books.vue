<template>
  <div id="book">
    <ul v-for="book in books">
      <h5> {{book.title}} </h5>
      <p> {{book.description}} </p>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      let el = document.getElementById('books_list');
      let json = JSON.parse(el.getAttribute('data'));
      return{
        books: json
      }
    }
  }
</script>

<style scoped>
h5 {
  font-size: 25px;
  text-align: center;
  background-color: blue;
}


</style>

