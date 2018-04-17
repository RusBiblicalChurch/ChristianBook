<template>
  <div class="book">
    <div class="book_info">
      <h3>{{book.title}}</h3>
      <p>{{book.price}} руб</p>
      <p>{{book.description}}</p>
    </div>  
  </div>
<!--       <div class="book-id">{{book.id}}</div>
      <div class="book-title">{{book.title}}</div>
      <div class="book-description">{{book.description}}</div> -->
</template>

<script >
  export default {
    props: ["book"],
  }
</script>

<style scoped>
  .book_info{
    width: 600px;
    text-align: center;
    background-color: antiquewhite;
  }
</style>
 