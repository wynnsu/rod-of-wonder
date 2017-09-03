import React, {Component} from 'react';
import styled from 'styled-components';
import ItemTable from './components/ItemTable';
import './App.css';

class App extends Component {
  render() {
    const Background = styled
      .div
      .attrs({ClassName: 'container'})`
      margin-top:100px;
      margin-bottom:100px;
      margin-left:auto;
      margin-right:auto;
      max-width: 1500px;
      background-color: papayawhip;
      padding: 100px
    `;
    return (
      <Background>
        <ItemTable/>
      </Background>
    );
  }
}

export default App;