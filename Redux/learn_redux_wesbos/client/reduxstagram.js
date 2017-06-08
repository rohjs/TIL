// let's go!
import React from 'react'
import { render } from 'react-dom'

// import css
import css from './styles/style.styl'

// import components
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// import react router deps
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

// router
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))

// Provider : 이 프로젝트는 리덕스가 state(데이터)를 관리한다!!!!!! 리엑트-리덕스 합쳐라 (가장 상위 컴포넌트) -> 그러니까 store를 던져줘야함
// Router : 내 안엔 여러가지 Route를 품을 수 있지, 훗 그리고 얘네의 지정된 configuration에 맞춰서 component를 렌더한다
// Router에게 history를 알려준다. history에는 syncHistoryWithStore(browserHistory, store)에 의해서 store에서 일어난 변화들이 다 저장되어있다리~ (어려움)
// IndexRoute : 기본 라우트일 때 내가 들어가지롱
