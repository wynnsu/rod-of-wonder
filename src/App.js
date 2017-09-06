import React, {Component} from 'react';
import styled from 'styled-components';
import ItemTable from './components/ItemTable';
import './App.css';
import Color from 'color';

const Background = styled
  .div `
margin-top:50px;
margin-bottom:50px;
margin-left:auto;
margin-right:auto;
max-width: 768px;
min-width: 300px;
background-color: ${Color('#f3f3e8')
  .fade(0.1)
  .string()};
padding: 50px 50px 50px 50px;
box-sizing:border-box;
@media(max-width: 768px){
  margin: 60vw 0 0 0;
  padding: 20px 20px 20px 20px;
  width: 100%;
}
`;
class App extends Component {
  render() {

    return (
      <Background>
        <ItemTable
          title='Rod of wonder'
          price='12,000'
          aura='moderate enchantment'
          cl='10th'
          weight='5 lbs.'/>
      </Background>
    );
  }
}

export default App;