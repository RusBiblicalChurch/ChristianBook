<template>
  <div class="book">
    <div class="book-info">
      <div class="book-title">
        <router-link :to="{ name: 'book', params: { id: bookLocal.id }  }">{{bookLocal.title}}</router-link>
      </div>
      <p>{{bookLocal.price}} руб</p>
      <p>{{bookLocal.description}}</p>
      <div class="picture">
        <img :src="bookLocal.picture_url" width="200" height="250"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      book: Object
    },
    data () {
      return {
        bookLocal: this.book
      }
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
