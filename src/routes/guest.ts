import LoginPage from '../pages/LoginPage'
import TicketMasterLoginPage from '../pages/TicketMasterLoginPage'
import CreateAccountPage from '../pages/CreateAccountPage'
import SignInPage from "../pages/SignInPage"

const routes = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/ticket-login',
    component: TicketMasterLoginPage
  },
  {
    path: '/create-account',
    component: CreateAccountPage
  },
  {
    path: '/signin',
    component: SignInPage
  }
]

export default routes