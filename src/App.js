import React, { Component } from 'react';
import logo from './logo.svg';
import { Wrapper, Header, Logo, Title, Intro } from './component';

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt={'logo'} />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}
