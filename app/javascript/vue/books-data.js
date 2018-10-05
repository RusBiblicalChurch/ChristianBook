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
        let error = "Can't find book with ID: "
        const book = _.find(books, { id: id })
        if (book) {
          resolve(book)
        } else {
          reject(error + id)
        }
      })
      .catch((e) => reject(e))
  })
}

export default { getAll, getById }
