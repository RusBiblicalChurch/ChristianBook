import BookShelf from './BookShelf.vue'
import BookPage  from './BookPage.vue'

export const routes = [
    {
        path: '/',
        component: BookShelf
    },
    {
        path: '/info/:id',
        component: BookPage
    },
    {
        path: '*',
        component: BookShelf
    }
]
