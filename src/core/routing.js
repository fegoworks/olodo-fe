import HomePage from '<pages>/HomePage'
import CartPage from '<pages>/CartPage'

const routes = {
  default: [{
      exact: true,
      path: '/',
      component: HomePage
    },
    {
      path: '/cart',
      component: CartPage
    }
  ]
}
export default routes