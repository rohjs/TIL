import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Main from './Main'
import { Provider } from 'react-redux'
import store from './lib/redux/store'

let main = document.getElementById('#main')
if (main == null) {
  main = document.createElement('div')
  main.setAttribute('id', 'main')
  document.body.appendChild(main)
}

function render () {
  ReactDOM.render(<AppContainer>
    <Provider store={store}>
      <Main />
    </Provider>
  </AppContainer>, main)
}

render()

if (module.hot) {
  module.hot.accept('./Main', () => {
    render()
  })
}
