import React, {Component} from 'react';
import styled from 'styled-components';
import ItemTable from '../components/item/ItemTable';
import {EffectTableData, ItemData} from '../apis/local';
import backgroundImage from './images/background.jpg';
import {palette} from '../utils/color';

const Background = styled.section `
  background: url(${backgroundImage}) fixed no-repeat;   
  background-position:top center;
  background-size: cover;
  background-color: rgb(129, 114, 88);
  font-family: 'Roboto Condensed', sans-serif;
  padding: 0;
  width: 100%;
  @media(min-width: 768px){
    padding-top:50px;
    padding-bottom:50px;
  }
`;

const Content = styled
  .article ` 
margin-left:auto;
margin-right:auto;
background-color:${palette.background};
box-sizing:border-box;
padding: 20px 20px 20px 20px;
width: 100%;
@media(min-width: 768px){
  padding: 50px 50px 50px 50px;
  max-width: 768px;
}
`;

export default class extends Component {
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