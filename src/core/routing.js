import HomePage from '<pages>/HomePage'
import BookPage from '<pages>/BookPage'

const routes = {
  default: [{
      exact: true,
      path: '/',
      component: HomePage
    },
    {
      path: '/:bookId',
      component: BookPage
    }
  ]
}
export default routes