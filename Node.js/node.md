# Node
O'Reilly Media에서 발행한 *Learn Node* 책을 읽고 공부한 내용을 정리한다.

## 1. The Node Environment
노드는 서버에서만 사용되는 것이 아니다. PC, 타블렛, microcomputers(i.e. 라즈베리 파이) 같은 곳에서도 사용할 수 있다. 노드에는 노드가 사용할 수 있는 여러 모듈들을 포함하고 있다. 이 모듈둘은 각기 다른 일(external functionality)을 수행한다. 노드가 제일 잘하는 것은 각각 모듈에게 필요한 일을 시키기.

노드의 바탕이 되는 구조는 callback 함수로 anonymous function을 전달한다는 것이다. 그 이유는 이러하다. 자바스크립트는 기본적으로 single-thread이다. 이런 single-threaded environment에서 multi-threaded environment를 모방하기 위해서 이벤트 루프(event loop)를 이용한다. 이때 특정 이벤트가 발생했을 때 어떤 일을 실행할지를 명시할 때 callback 함수를 사용하는 것이다.

```javascript
const http = require('http')
// http는 노드에서 기본적으로 제공하는 모듈이다, that serves external functionality.

http.createServer((req, res) => {
  // http의 createServer 메소드를 통해 서버를 만들 수 있다.
  // createServer는 콜백 함수를 인자로 받는다.
  // 이 콜백 함수는 클라이언트 사이드에서 요청(req)이 발생하면 === event
  // 그때 실행이 된다.
  res.writeHead(200,{
    'Content-Type': 'text/plain'
  })
  // 응답(res)은 서버에서 클라이언트에게 전해줄 내용을 담는다.
  // 그리고 Head를 작성해야 하나 보다! (아직 잘 모름)
  res.end('Hello World\n')
  // 마지막에 'Hello World'란 메세지를 남기고 응답을 끝을 낸다는 뜻
}).listen(8124)
// http.createServer()를 통해 만들어진 서버 앱이 포트 8124에서 실행되게 하는 듯.
```

#### 새로 배운 것들
* batch: 일괄처리하다
* http://127.0.0.1:port === http://localhost:port
