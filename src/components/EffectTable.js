import React, {Component} from 'react';
import styled from 'styled-components';
import Color from 'color';

//#BF6A21
const colorDark = Color('#BF6A21');

const Table = styled.table `
  border-collapse: collapse;
  table-layout:auto;
  width:100%;
`;
const TableRow = styled
  .tr `
  border-bottom-color:${colorDark
  .lighten(0.6)
  .string()};
  border-bottom-width:1px;
  border-bottom-style:solid;
`;
const TitleRow = TableRow
  .extend `
    color:${colorDark
  .string()};
    border-bottom-color:${colorDark
  .lighten(0.3)
  .string()};
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
                ? <TitleCol>{item}
                  </TitleCol>
                : <TableCol>
                  {item}
                </TableCol>))}
          </TitleRow>
        </thead>}
        <tbody>
          {this
            .props
            .rows
            .map((item, index) => (index > 0 && <TableRow>
              {item.map((it, idx) => (it.length < 10
                ? <NoWrap>
                    {it}</NoWrap>
                : <TableCol>
                  {it}
                </TableCol>))}
            </TableRow>))}
        </tbody>
      </Table>
    );
  }
}

export default EffectTable;