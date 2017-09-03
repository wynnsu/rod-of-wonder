import React, {Component} from 'react';
import Table from 'react-bootstrap/lib/Table';

class EffectTable extends Component {

  render() {
    const colorDark = 'rgba(191,106,33,1)';
    const colorDark60 = 'rgba(191,106,33,0.6)';
    const colorDark20 = 'rgba(191,106,33,0.2)';
    const titleStyle = {
      color: colorDark,
      fontSize: '2em'
    };
    return (
      <Table responsive>
        {this.props.rows.length > 0 && <thead>
          <tr>
            {this
              .props
              .rows[0]
              .map((item, index) => (index > 0
                ? <td
                    style={{
                    borderBottom: colorDark60 + ' solid 2px',
                    ...titleStyle,
                    'text-transform': 'uppercase'
                  }}>
                    <strong>{item}</strong>
                  </td>
                : <td
                  style={{
                  borderBottom: colorDark60 + ' solid 2px',
                  ...titleStyle
                }}>
                  <strong>{item}</strong>
                </td>))}
          </tr>
        </thead>}
        <tbody>
          {this
            .props
            .rows
            .map((item, index) => (index > 0 && <tr>
              {item.map((it, idx) => (
                <td
                  style={{
                  borderBottom: colorDark20 + ' solid 2px', 
                  fontSize: '1.5em'
                }}>{it}</td>
              ))}
            </tr>))}
        </tbody>
      </Table>
    );
  }
}

export default EffectTable;