import axios from 'axios'
import _ from 'lodash'

function getAll () {
  return new Promise((resolve, reject) => {
    axios('/api/books')
      .then((response) => resolve(response.data))
      .catch((e) => reject(e))
  })
}

function getById (id) {
  return new Promise((resolve, reject) => {
    getAll()
      .then((books) => {
        const book = _.find(books, { id: id })
        if (book) {
          resolve(book)
        } else {
          reject(new Error(`'Can't find book with ID ${id}'`))
        }
      })
      .catch((e) => reject(e))
  })
}

export default { getAll, getById }
