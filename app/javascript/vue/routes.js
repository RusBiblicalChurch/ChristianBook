import BookShelf from './BookShelf.vue'
import BookPage from './BookPage.vue'

export default routes = [
  {
    path: '/',
    component: BookShelf
  },
  {
    path: '/book/:id',
    name: 'book',
    component: BookPage
  },
  {
    path: '*',
    component: BookShelf
  }
]
