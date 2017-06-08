// import React
import React from 'react'
import { render } from 'react-dom'

// import CSS
import css from './style.styl'

// import Components
import App from './components/App'
import Map from './components/Map'
import PostForm from './components/PostForm'
import PostView from './components/PostView'

// import router
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

// router
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Map} />
        <Route path="/post/edit/:postId" component={PostForm} />
        <Route path="/post/new" component={PostForm} />
        <Route path="/post/:postId" component={PostView} />
      </Route>
    </Router>
  </Provider>
)

// render router
render(router, document.querySelector('#main'))