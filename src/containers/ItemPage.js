import React, {Component} from 'react';
import styled from 'styled-components';
import ItemTable from '../components/Item/ItemTable';
import {EffectTableData, ItemData} from '../apis/local';
import backgroundImage from './images/background.jpg';
import {palette} from '../utils/color';

const Background = styled.div `
  background: url(${backgroundImage}) fixed no-repeat;   
  background-position:top center;
  background-size: cover;
  background-color: rgb(129, 114, 88);
  font-family: 'Roboto Condensed', sans-serif;
  padding-top:50px;
  padding-bottom:50px;
`;

const Content = styled
  .div ` 
margin-left:auto;
margin-right:auto;
max-width: 768px;
min-width: 300px;
background-color:${palette.background};
padding: 50px 50px 50px 50px;
box-sizing:border-box;
@media(max-width: 768px){
  margin: 60vw 0 0 0;
  padding: 20px 20px 20px 20px;
  width: 100%;
}
`;

class ItemPage extends Component {
  render() {
    return (
      <Background>
        <Content>
          <ItemTable
            itemdata={ItemData(this.props.name)}
            effectdata={EffectTableData(this.props.name)}/>
        </Content>
      </Background>
    );
  }
}

export default ItemPage;