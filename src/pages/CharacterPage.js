import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {CharacterData} from '../apis/local';
import CharacterSheet from '../components/character/CharacterSheet';
import CharacterNav from '../components/character/CharacterNav';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import {palette} from '../utils/color';

const Character = ({match}) => (<CharacterSheet data={CharacterData(match.params.characterId)}/>)

class CharacterPage extends Component {
    render() {
        return (
            <section>
                {(!this.props.match.isExact)&&<Link to={`${this.props.match.url}`} >
                    <FaAngleLeft size='3em' color={palette.dark_primary}/>
                </Link>}
                <Route
                    exact
                    path={this.props.match.url}
                    render={() => (
                        <CharacterNav baseurl={this.props.match.url} data={CharacterData('nav')}/>
                )}/>
                <Route path={`${this.props.match.url}/:characterId`} component={Character}/>
            </section>
        );
    }
}

export default CharacterPage;