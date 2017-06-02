import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import PostForm from './components/PostForm';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
        	<Route path="/post/new" component={PostForm} />
        	<Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

render(<Root />, document.querySelector('#main'));
