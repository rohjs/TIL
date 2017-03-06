# React

##### WARNING! Stream of consciousness may be detected
형식을 지킬 여유/마음이 없음. 음슴체로 쓰겠음. 지금 Udemy에서 [Andrew Mead의 리액트 강의](https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/content)를 듣고 있음. 이번 공부의 목표는 일단 빠르게 따라해보기임으로 정리 정돈 요약 대신 공부하면서 적어둔 필기를 샤샤샥 메모 남기는 것에 더 집중하겠음.

## Index
1. [시작하기 전에 1](#1-시작하기-전에)
2. [시작하기 전에 2](#2-시작하기-전에-2)
3. [React 101](#3-react-101)

---

## 1. 시작하기 전에
앱이 잘 돌아가는 지를 확인하기 위해서 웹 서버를 켜야한다고 했음. 사실 좀 이해가 안 되는 부분임. 이전에는 그냥 `index.html` 파일 만들고 그냥 브라우저에 띄우면 됐었는데 왜 서버가 필요하다는 건지 잘 모르겠었음. 하지만 일단 시키는 대로 함.

#### 1. npm init
먼저 터미널을 켜고 리액트 프로젝트를 위한 폴더를 만들고 `npm init`을 실행한다.

```bash
$ mkdir HelloReact
$ cd HelloReact
$ npm init
```

그러면 이상한 게 튀어나옴. 하지만 겁먹지 말고 값을 적어주면 됌. `npm init`을 하면 `package.json`이란 파일이 만들어짐. 여기서 node project를 관리하고 나중에 dependency 같은 것도 관리한다고 함. 즉, 그렇게 하기 위해 프로젝트에 대한 간략한 정보를 적는 것이지. 쫄지 말고 일단 적는다.

```bash
name: (HelloReact) hello-react
version: (1.0.0)
description: A simple react application
main: (index.js)
# and so on
```

`()`에 적힌 것은 기본값인데 이런 경우 뭘 적어야할지 모르겠으면 그냥 넘어가면 된다. 어쨌든 마지막에 `yes`까지 입력하고 나면 루트 폴더(HelloReact)에 `package.json`파일이 생성된 걸 확인할 수 있음.


#### 2. Module을 추가하자

HelloReact에게 어떤 third party module을 사용할 건지 알려주면 된다. 쉽게 말하면 쓰고싶은 라이브러리/프레임워크를 `package.json`에 기록해두면 된다는 것이다.  
루비로 따지면 `gem` 같은 건데, 존잘러들이 이미 만들어 두신 것들의 dependency관계를 적어두기만 하면, 나중에 존잘러님들이 라이브러리를 업데이트 하더라도 `npm install`이라고 터미널에 치기만 하면 한방에 업데이트를 다 받아볼 수 있기도 하고 유용한 녀석임  

일단 앤드류찡은 Express를 설치한다고 함. 그래서 시킨대로 했음

```bash
$ npm install express@4 --save
```

`express`는 우리가 의존(dependency)하고자 하는 라이브러리 이름, `@4`는 버전, `--save`를 마지막에 적어줘야 `package.json`에 해당 값이 저장이 된다.  
그런 다음에 `package.json`에 들어가면 `dependencies`라는 속성이 하나 추가된 걸 볼 수 있을 거임. 그럼 성공적!

```json
{
  "dependencies": {
    "express": "^4.14.1"
  },
}
```

#### 3. 서버를 돌리기 위한 준비를 얍!

이제 루트 폴더에 `server.js`라는 걸 만들어 줘야 한다. 그래야 node server를 가동시킬 수 있다는데...

```javascript
var express = require('express');
var app = express();

app.use(express.static('public'));
app.listen(3000, function() {
  console.log('Your project is now up on port 3000!');
});
```

후... 갑자기 마음이 힘들어지기 시작했다. 하지만 받아들인다. 모든 과정을 지금 당장은 이해할 필요가 없다. (마인드 컨트롤 중)  

`require()`은 `node.js`에서 제공하는 함수로, 쉽고 간편하게 모듈을 추가할 수 있게 도와주는 존잘러 함수라고 한다. 우리는 Express를 필요로 하니까 `'express'`를 전달인자 값으로 슉슉 던져준다. 그리고 변수 `app`에서 Express 모듈 함수를 실행시킨다.  
`app.use()`를 하면 Express 모듈에 기능을 추가할 수 있단다. 내가 서버로 띄우고 싶은 파일을 담은 폴더의 이름을 `express.static()`의 전달인자 값으로 주고 이를 `app.use()`의 전달인자로 준다. 중요한 건 이래야 `public` 폴더에 있는 `index.html` 파일이 서버에서 실행이 된다는 점이다.

`app.listen()`은 실제로 서버를 실행시킬 때 필요한 것이다. 첫번째 인자로 포트 넘버를, 두번째 인자로 서버가 실행됐을 때 실행될(ㅋㅋ) 함수를 적어준다.

그리고 루트 폴더에 가서 `public`이란 디렉토리를 만들고, 그 안에 `index.html`을 만들어준다. `index.html`이란 이름을 가지고 있는 파일을 자동으로 서버에서 띄어준다고 한다. 내부 메커니즘은 잘 모르겠으나 어쨌든 `index`란 이름을 함부로(러ㅋㅋ) 쓰면 안 된다는 생각이 든다. 깔깔


#### 4. 서버를 돌리자

```bash
$ node server.js
```

이제 `http://localhost:3000/`에서 당신의 HelloReact 앱을 볼 수 있을 것이다. 기본 세팅 완료.


## 2. 시작하기 전에 2

#### 1. CDN 주소를 불러오자
또 세팅을 해야할 게 있다. 리엑트 어플리케이션을 만들기 위해서는 CDN 주소를 불러와야 한다. Andrew찡은 지금 불러오는 CDN 주소가 최신 버젼은 아니지만 일단 편의를 위해서 해당 버전을 사용한다고 한다.

```html
<head>
  <meta charset="utf-8">
  <title>HelloReact</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js" charset="utf-8"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js" charset="utf-8"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js" charset="utf-8"></script>
</head>
```

우리는 **Babel, React, ReactDOM** 을 사용할 것이다. 바벨은 JSX(JavaScript XML)을 렌더하고 ES6를 해석하는 역할을, 리엑트는 당연한거고 리엑트 돔은 웹앱을 만들기 위해 필요하다.


#### 2. 스크립트 파일을 연결시키자

```html
<body>
  <div id="app"></div>
  <script type="text/babel">
    ReactDOM.render(
      <h1>Hello React</h1>,
      document.getElementById('app')
    );
  </script>
</body>
```

간단하게 `ReactDOM`을 이용해봤다. 리엑트는 JSX를 사용하는데, 바벨이 JSX와 ES6문법을 알아서 해석해준다. 이때 바벨에게 '여기 좀 해석 부탁'한다고 전해야 하는데 `<script>`요소의 속성으로 `type= "text/babel"` 이거 하나만 적어주면 된다. 쩖... 근데 요소를 적을 때 JSX는 문자열을 사용하지 않아서 훨씬 편하다. 갇 페이스북 존잘러님들은 역시 다르다.  
어쨌든 저렇게 코드를 짜면 `<div id="app">` 내부에 `<h1>`요소가 생긴 것을 확인할 수 있을 것이다. 가슴으로 받아들이자.

저렇게 HTML문서 안에 스크립트 코드를 작성할 수도 있지만 분리해보자. `public` 디렉토리 내부에 `app.jsx` 파일을 만든다. 그리고 `<script src="app.jsx">`로 파일을 호출하는데, 이때도 역시 `type="text/babel"`을 명시하는 걸 잊으면 안됌

```html
<body>
  <script src="app.jsx" charset="utf-8" type="text/babel"></script>
</body>
```
 _tip. Atom의 경우 **react** 란 패키지를 다운받으면 JSX syntax에 맞게 색깔이 예쁘게 칠해지는 것을 볼 수 있을 것이다._


## 3. React 101

평소 성격 같으면 "이건 왜 그렇게 되는 거죱?"하고 하나하나 다 따지고 들었을 텐데, 뭔가 이러다보니 배우는 속도가 매우 느려지는 것 같아서 묻지도 말고 따지지도 말고 일단 해보려고 한다. (아마 이 MD파일에 '일단 해본다'라는 말이 제일 많이 나올듯ㅋㅋㅋㅋ)

리엑트는 기본적으로 컴포넌트 단위로 이루어졌다고 한다. 컴포넌트는 Web UI를 만드는 작은 레고같은 거라고 생각하면 된다고 한다(ㅇㅋ...)

```javascript
/* app.jsx */

// 1. CREATE A COMPONENT
var Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello React</h1>
        <p>My first time making a react app!</p>
      </div>
    );
  }
});

// 2. ADD IT TO DOM
ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
```

리엑트의 컴포넌트를 만들 때 지켜주어야 하는 사항이 몇 가지 있다.
* `render()` 메소드를 가진다.
* `render()` 메소드는 반드시 `return`값으로 JSX형태의 HTML코드를 반환한다.
* 반환하는 HTML코드는 반드시 하나이다. 여러개의 요소를 반환하고 싶으면 하나의 감싸는 요소로 감싼 후 리턴한다.
* 이름의 시작을 대문자로 하는게 관례고 CamelCase를 따른다.
* ReactDOM에서 렌더할 때 `<변수명/>` 식으로 작성하여 호출한다.

이렇게 하면 `<div id="app">`의 자식요소로 반환한 HTML코드가 작성된 것을 볼 수 있다.

#### 이런게 도대체 어떻게 가능함? ㅇㅅㅇ

이걸 확인하기 위해 [바벨 사이트](https://babeljs.io/repl)에 들어가서 직접 짠 코드를 대입하면 바벨이 어떤 식으로 코드를 해석하는지 볼 수 있다.

```javascript
"use strict";

var Greeter = React.createClass({
  displayName: "Greeter",
  render: function() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Hello React"
      ),
      React.createElement(
        "p",
        null,
        "My first time making a react app!"
      )
    });
  }
});

ReactDOM.render(React.createElement(Greeter, null), document.getElementById('app'));
```

우리가 JSX로 투두둑 쳤던 것이 `React.createElement()`로 일일이 다시 만들어지는 것을 확인할 수 있다. JSX로 쓰는 게 확실히 유지 보수 측면이나 코드 가독서에 더 좋다.

#### props: 컴포넌트에 데이터 값을 전달하자

컴포넌트 내부 요소에 고정된 값이 아니라 어떤 데이터를 주기 위해선 `props`를 사용하면 된다.

먼저 리엑트돔에서 이렇게 컴포넌트 태그 옆에 속성값을 지정해준다. 아래의 예시에 `name`이란 속성에 `Jiseung`이란 값을 담아두었다.

```javascript
ReactDOM.render(
  <Greeter name="Jiseung"/>,
  document.getElementById('app')
)
```

그러면 `name`이 마치 비둘기처럼 작용해서 리엑트 컴포넌트에 내부에 자신의 값을 전달해줘야 하는데, 비둘기 역할을 할 name값을 `render()` 내부의 변수 안에 담아둬야 함. `this.props.name` 값을 `var name`에 담아두면 `render()` 내부에서도 해당  값을 참조할 수 있다. 그러려면 `name` 값이 어디에 반영되는지 알려줘야 하는데 `{ name }`을 해당 요소 태그 안에 넣어두면 됌.

```javascript
var Greeting = React.createClass({
  var name = this.props.name;
  render: function() {
    return (
      <div>
        <h1>Hello { name }</h1>
        <p>My first time making a react app!</p>
      </div>
    );
  }
});
```

그리고 해당값이 전해지지 않았을 때 기본적으로 가질 기본값도 설정할 수 있음. 그러려면 `getDefaultProps`메소드도 컴포넌트 내부에 설정해야 함.

```javascript
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      author: 'My'
    }
  },
  render: function() {
    var name = this.props.name,
        author = this.props.author;
    return (
      <div>
        <h1>Hello { name }</h1>
        <p>{ author } first time making a react app!</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name={name} author={author} />,
  document.getElementById('app')
);
```

이렇게 하면 `ReactDOM.render()`를 할때 설사 `name`, `author`의 값이 주어지지 않아도 문제 없이 렌더링이 될 것이다.

## 4. Props & State
`Props`에는 변하지 않는 데이터를 담아두고  `State`에는 변하는 값을 담아둔다고 한다. 예시를 통해 자세히 살펴보는게 빠를듯.

지금 만들 예제는 `<form>`에 어떠한 값을 전달하며 그것이 `<h1>`에 반영이 되게 하는 녀석이다. 이걸 구현하려면 `Props`만으로는 절대 불가능하다.

```javascript
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React'
    };
  },
  render: function() {
    return (
      <div>
        <h1>Hello { name }</h1>
        <form>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
});
```

먼저 `form`의 `input`에 담긴 값을 가져오는 작업부터 처리하자. `input`을 작성하고 `button`을 눌렀을 때 이벤트를 발생시켜야 하는데, 그때 `form`에 `onSubmit` 속성을 만들고 `onButtonClick`이란 이벤트 함수를 걸어준다. 그리고 옵션 객체에 `onButtonClick`이란 이벤트 함수를 만들면 됌. 나도 적으면서 이게 무슨 말인지 모르겠지만, 아래의 코드를 보면 이해가 될거임.

```javascript
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React'
    };
  },
  onButtonClick: function() {
    var name = this.refs.name,
        value = name.value;
  },
  render: function() {
    return (
      <div>
        <h1>Hello { name }</h1>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
});
```

사용자가 버튼을 눌러서 폼을 제출하면 `onButtonClick`이 가리키는 함수가 실행이 될거임.

#### refs? ref? 왓이짓
눈썰미가 있는 사람은 `input` 태그에 `ref="name"`이란 속성이 추가되어 있는 것을 봤을 거임. 옵션 객체 내에서 HTML 요소 대상을 가리키기 위한 변수라고 `ref`를 생각하면 좋을듯. 한마디로 앞으로 우리는 `input`을 `ref`가 `name`인 녀석으로 부르겠다는 거임.  
그러니까 `this.refs.name`라고 `onButtonClick`에서 부르면 `render` 함수의 리턴값중 하나인 `input`을 부를 수 있다는 것. ㅇㅇ 인내가 필요하다.

암튼 내가 하고 싶은 것은, 저기에 값이 들어오면 그 값을 `name`값으로 변경해서 화면에 쏘고 싶은데 그럼 이렇게 하면 된다.

```javascript
getInitialState: function() {
  return {
    name: this.props.name
  };
},
onButtonClick: function() {
  var name = this.refs.name,
      value = name.value;
  if ( value ) {
    name.value = '';
    this.setState({
      name: value
    });
  }
},
render: function() {
  var name = this.state.name;
  return (
    <div>
      <h1>Hello { name }</h1>
      <form onSubmit={this.onButtonClick}>
        <input type="text" ref="name"/>
        <button>Submit</button>
      </form>
    </div>
  );
}
}
```

* `getInitialState` : 이제 `name`은 `prop`이 아니라 `state`가 될 것이다. 그렇게 하기 위해서 `state` 값을 초기화 시켜주는 작업이라고 생각하면 될듯. 이때 `name: this.props.name`이라고 해놓는 것은 초기값을 `prop`에서 찾겠다는 것  
_cf. `render`의 `name`변수를 `this.props.name`에서 `this.state.name`로 바꾼 것_
* `this.setState()` : 값이 상태가 변할 때마다 그 값을 다시 셋하겠다는 거. 이때 전달인자로 객체를 던져야하고, 그 객체에는 변화시기고자 하는 `state`와 변화된 값을 전달하면 된다.

그런데 이런식으로 코드를 짜면 딱봐도 유지관리가 매우 귀찮고 어려워 보임. 그래서 컴포넌트를 좀 나눠볼 필요가 있을 듯 하다.
