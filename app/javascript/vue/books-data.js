import Axios from 'axios'

export default function data () {
  let el = document.getElementById('books_list');
  let books = JSON.parse(el.getAttribute('data'));

  return {
    books
  }
}
