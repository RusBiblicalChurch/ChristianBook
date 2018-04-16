<template>
    <div class="book">
        <div class="header"> {{book.title}} </div>
        <div class="description"> {{book.description}} </div>
        <button @click="bookView">View</button>
    </div>
</template>

<script>
  export default {
    props: ["book"],

    methods: {
      bookView: function() { this.$emit('bookEvent', this.book.title) }
    }

  }
</script>

<style scoped>
    .book {
        width: 400px;
        background-color: #B00100;
        padding: 10px;
    }
    .header {
        font-size: 25px;
        text-align: center;
        background-color: #005192;
        color: white;
        padding: 20px;
    }
    .description {
        padding: 20px;
        background-color: blueviolet;
    }
</style>

