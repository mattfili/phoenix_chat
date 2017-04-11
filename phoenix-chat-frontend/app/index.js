import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, HashRouter } from "react-router-dom"
import { Provider } from "react-redux"

import "./styles/reset.css"

import store from "./redux/store"

import { default as Home } from "./components/Home/index"
import { default as Settings } from "./components/Settings/index"

const App = props => (<div>{props.children}</div>)


ReactDOM.render((
<Provider store={store}>
  <HashRouter>
    <App>
        <Route exact={true} path="/" component={Home} />
        <Route path="/settings" component={Settings} />
    </App>
  </HashRouter>
</Provider>
),document.getElementById("root"))
