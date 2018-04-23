export default function data () {
  let el = document.getElementById('books_list');
  let books = JSON.parse(el.getAttribute('data'));

  console.log(books)
  return {
    books
  }
}
