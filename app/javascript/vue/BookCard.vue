<template>
  <div class="book">
    <div class="book-info">
      <div class="book-title">
        {{book.title}}
      </div>
      <p>{{book.price}} руб</p>
      <p>{{book.description}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      book: Object
    }
  }
</script>

<style scoped>
  .book-info{
    width: 600px;
    text-align: center;
    background-color: antiquewhite;
  }

  .book-title{
    font-family: "PT Sans", "Arial", serif;
    font-size: 25px;
  }
</style>
