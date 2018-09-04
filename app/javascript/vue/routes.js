import BookShelf from './BookShelf.vue'
import BookPage  from './BookPage.vue'
import App from './App.vue'

export const routes = [
    {
        path: '/',
        component: BookShelf
    },
    {
        path: '/info',
        component: BookPage
    },
    {
        path: '*',
        component: BookShelf
    }
]
