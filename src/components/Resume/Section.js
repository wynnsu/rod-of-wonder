import React, {Component} from 'react';
import styled from 'styled-components';
import Education from './Education';
import Project from './Project';
import Experience from './Experience';
import Skills from './Skills';

const Title = styled.h4 `
    margin: 0;
    border-bottom: 1px solid black;
    margin-top:15px;
    text-transform:uppercase;
`;

class Section extends Component {
    render() {
        return (
            <div>
                <Title>{this.props.type}</Title>                
                {this.props.type==='education'
                &&this.props.data.map((item,index)=><Education key={index} data={item} />)
                }
                {this.props.type==='project'
                &&this.props.data.map((item,index)=><Project key={index} data={item} />)
                }
                {this.props.type==='experience'
                &&this.props.data.map((item,index)=><Experience key={index} data={item}/>)
                }
                {this.props.type==='skills'
                &&this.props.data.map((item,index)=><Skills key={index} data={item}/>)
                }
            </div>
        );
    }
}

export default Section;