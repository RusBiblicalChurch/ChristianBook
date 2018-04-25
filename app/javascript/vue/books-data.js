export default function data () {
  const el = document.getElementById('books_list')
  const books = JSON.parse(el.getAttribute('data'))

  console.log(books)
  return {
    books
  }
}
