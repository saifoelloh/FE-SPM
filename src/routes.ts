import Login from "./views/Auth/Login"
import Register from "./views/Auth/Register"

const routes = [
  {
    path: "/auth/login",
    component: Login,
  },
  {
    path: "/auth/register",
    component: Register,
  },
]

export default routes
