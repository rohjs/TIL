// import react, react-dom
import React from 'react'
import ReactDOM from 'react-dom'
// import react-hot-loader
import { AppContainer } from 'react-hot-loader'
// import components
import Main from './Main'
// import react-redux
import { Provider } from 'react-redux'
// import store
import store from './lib/redux/store'

// find or create #main element
let main = document.querySelector('#main')
if (main == null) {
  main = document.createElement('div')
  main.setAttribute('id', 'main')
  document.body.appendChild(main)
}

// create render() for react-hot-loader
const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </AppContainer>
  ), main)
}

// execute render()
render()

// set react-hot-loader
if (module.hot) {
  // if module is hot(?)
  module.hot.accept('./Main', () => {
    // execute render function again
    render()
  })
}



