import React, {Component} from 'react';
import styled from 'styled-components';
import {lighten} from '../../utils/color'

//#BF6A21
const colorDark = '#BF6A21';

const Table = styled.table `
  border-collapse: collapse;
  table-layout:auto;
  width:100%;
`;
const TableRow = styled.tr `
  border-bottom-color:${lighten(colorDark, 30)};
  border-bottom-width:1px;
  border-bottom-style:solid;
`;
const TitleRow = TableRow.extend `
    color:${colorDark};
    border-bottom-color:${lighten(colorDark, 15)};
    border-bottom-width:2px;
    font-weight:bold;
`;
const TableCol = styled.td `
    padding:0 5px;
`;
const TitleCol = TableCol.extend `
    text-transform:uppercase;
`;
const NoWrap = TableCol.extend `
    white-space: nowrap;
`;

class EffectTable extends Component {
  render() {
    return (
      <Table>
        {this.props.rows.length > 0 && <thead>
          <TitleRow>
            {this
              .props
              .rows[0]
              .map((item, index) => (index > 0
                ? <TitleCol key={index}>{item}
                  </TitleCol>
                : <TableCol key={index}>
                  {item}
                </TableCol>))}
          </TitleRow>
        </thead>}
        <tbody>
          {this
            .props
            .rows
            .map((item, index) => (index > 0 && <TableRow key={index}>
              {item.map((it, idx) => (it.length < 10
                ? <NoWrap key={idx}>
                    {it}</NoWrap>
                : <TableCol key={idx}>
                  {it}
                </TableCol>))}
            </TableRow>))}
        </tbody>
      </Table>
    );
  }
}

export default EffectTable;