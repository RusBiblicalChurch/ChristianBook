import Vue from 'vue'

export default{
  data() {
    let el = document.getElementById('books_list');
    let books_json = JSON.parse(el.getAttribute('data'));
    return {
      books: books_json
    }
  }
}
