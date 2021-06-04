import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import routes from "./routes"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route path={route.path} component={route.component} exact />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App
