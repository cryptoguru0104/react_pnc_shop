import ShopPage from "../pages/ShopPage"
import ProductDetailPage from "../pages/ProductDetailPage"
import CartPage from "../pages/CartPage"
import WishlistPage from "../pages/WishlistPage"
import HelpPage from '../pages/HelpPage'
import ProfilePage from '../pages/ProfilePage'
// import LoginPage from '../pages/LoginPage'
// import TicketMasterLoginPage from '../pages/TicketMasterLoginPage'
// import CreateAccountPage from '../pages/CreateAccountPage'
// import SignInPage from "../pages/SignInPage"

const routes = [
  {
    path: '/shop',
    component: ShopPage
  },
  {
    path: '/shop/:id/detail',
    component: ProductDetailPage
  },
  {
    path: '/cart',
    component: CartPage
  },
  {
    path: '/wishlist',
    component: WishlistPage
  },
  {
    path: '/help',
    component: HelpPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  // {
  //   path: '/login',
  //   component: LoginPage
  // },
  // {
  //   path: '/ticket-login',
  //   component: TicketMasterLoginPage
  // },
  // {
  //   path: '/create-account',
  //   component: CreateAccountPage
  // },
  // {
  //   path: '/signin',
  //   component: SignInPage
  // }
]

export default routes