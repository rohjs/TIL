import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../action/actionCreators'
import Main from './Main'

function mapStateToProps (state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App

// Redux state를 모두 다 props로 받아온다 (mapStateToProps)
// Redux action을 만드는 녀석들을 모두 가져온다 (import * as actionCreators from '../action/actionCreators')
// Redux action을 만드는 녀석들을 모두 reducer로 뿌린다 (mapDispatchToProps)
// 유저 이벤트 발생 -> 해당 이벤트와 관련된 액션 크리에이터 함수야 실행해라 얍!!! -> 액션을 토해내다! -> store의 dispatch야 이 액션을 모든 reducer들에게 뿌렸! -> 근데 이 액션 누구담당임? -> (one of the reducers) 제 담당입니다 주섬주섬 -> 새로운 state결과값을 만들어내다! -> combineReducer를 통해 state에 결과값을 반영합니다 (rootReducer) -> 이제 Redux의 state는 업데이트 되었다! 예이! ->
