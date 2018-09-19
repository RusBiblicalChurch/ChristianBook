<template>
  <div class="book">
    <div class="book-info">
      <div class="book-title">
        <router-link :to="{ name: 'book', params: { id: book.id }  }">{{book.title}}</router-link>
      </div>
      <p>{{book.price}} руб </p>
      <p>{{book.description}}</p>
      <div class="picture">
        <img  :src="book.picture_url" width="200" height="250"/>
      </div>
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
    background-color: rgb(255, 214, 160);
  }

  .book-title{
    font-family: "PT Sans", "Arial", serif;
    font-size: 50px;
  }
</style>