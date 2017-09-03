import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.handleRolling = this
      .handleRolling
      .bind(this);
  }
  handleRolling() {
    this
      .props
      .onRolling(Math.floor(Math.random() * this.props.faces + 1));
  }
  render() {
    return (
      <Button bsSize='large' bsStyle='primary' onClick={this.handleRolling}>
        Roll d{this.props.faces}</Button>
    );
  }
}

export default Dice;