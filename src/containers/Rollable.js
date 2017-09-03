import React, {Component} from 'react';
import Dice from './Dice';
import Image from 'react-bootstrap/lib/Image';

class Rollable extends Component {
    constructor(props) {
        super(props);
        this.handleRolling = this
            .handleRolling
            .bind(this);
        this.state = {
            points: ''
        };
    }
    handleRolling(result) {
        this.state.points
            ? this.setState({points: ''})
            : this.setState({points: result});
    }
    render() {
        const style = {
            'background-color': '#222',
            padding: '15px',
            color: 'white'
        }
        return (
            <div>
                <Dice faces='100' onRolling={this.handleRolling}/> 
                {this.state.points && <div style={style}>
                    <Image
                        rounded
                        src='https://i.pinimg.com/564x/ad/71/48/ad7148ae271fc9e697074db56f84fe37.jpg'
                        height='300px'
                        alt="rhino"/>
                    <h1>You got a {this.state.points}!</h1>
                </div>}
            </div>
        );

    }
}

export default Rollable;