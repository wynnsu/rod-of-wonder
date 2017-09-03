import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Collapse from 'react-bootstrap/lib/Collapse';

class Spoiler extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => this.setState({
          open: !this.state.open
        })}>
          Spoiler
        </Button>
        <Collapse in={this.state.open}>
          <div>
            {this.props.children}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Spoiler;