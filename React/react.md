# React

##### WARNING! Stream of consciousness may be detected
형식을 지킬 여유/마음이 없음. 음슴체로 쓰겠음. 지금 Udemy에서 [Andrew Mead의 리액트 강의](https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/content)를 듣고 있음. 이번 공부의 목표는 일단 빠르게 따라해보기임으로 정리 정돈 요약 대신 공부하면서 적어둔 필기를 샤샤샥 메모 남기는 것에 더 집중하겠음.

## Index
1. [시작하기 전에 1]()
2. [시작하기 전에 2]()
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
