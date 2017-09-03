import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import EffectTable from './EffectTable';

const colorDark = 'rgba(191,106,33,1)';
const colorLight = 'rgba(236,229,179,1)';

class ItemTable extends Component {
    render() {
        var data = require('../utils/effect-tables/rod-of-wondrous.json');

        const textSize = {
            fontSize: '2.5em'
        }
        const mainStyle = {
            fontFamily: 'Roboto Condensed, sans-serif'
        }
        const borderStyle = {
            ...mainStyle,
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: colorDark
        };
        const titleStyle = {
            ...mainStyle,
            backgroundColor: colorDark,
            color: colorLight,
            fontSize: '3.5em',
            padding: '10px 0 10px 15px'
        };
        const priceStyle = {
            ...mainStyle,
            backgroundColor: 'white',
            color: colorDark,
            textAlign: 'center',
            padding: '5px'
        };
        const descriptionStyle = {
            ...mainStyle,
            ...textSize,
            backgroundColor: colorLight,
            color: colorDark,
            textAlign: 'center',
            padding: '10px 5px 5px 5px'
        };
        return (
            <div>
                <Grid>
                    <Row>
                        <Col
                            xs={12}
                            md={8}
                            style={{
                            ...titleStyle,
                            ...borderStyle
                        }}>
                            <b>ROD OF WONDER</b>
                        </Col>
                        <Col
                            xs={12}
                            md={4}
                            style={{
                            ...priceStyle,
                            ...borderStyle
                        }}>
                            <Row
                                style={{
                                fontSize: '1.5em'
                            }}>
                                <strong>PRICE</strong>
                            </Row>
                            <Row
                                style={{
                                fontSize: '2.5em'
                            }}>
                                <strong>12,000 GP</strong>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            xs={12}
                            md={6}
                            style={{
                            ...descriptionStyle,
                            ...borderStyle
                        }}>
                            <p>
                                <strong>AURA</strong>
                                <span>
                                    moderate enchantment</span>
                            </p>
                        </Col>
                        <Col
                            xs={6}
                            md={2}
                            style={{
                            ...descriptionStyle,
                            ...borderStyle
                        }}>
                            <p>
                                <strong>CL</strong>
                                10th</p>
                        </Col>
                        <Col
                            xs={6}
                            md={4}
                            style={{
                            ...descriptionStyle,
                            ...borderStyle
                        }}>
                            <p>
                                <strong>WEIGHT</strong>
                                5 lbs.</p>
                        </Col>
                    </Row>
                </Grid>
                <h3>A rod of wonder is a strange and unpredictable device that randomly
                    generates any number of weird effects each time it is used. Activating the rod
                    is a standard action. Typical powers of the rod include the following.</h3>
                <EffectTable rows={data} borderColor={colorDark}/>
            </div>
        );
    }
}

export default ItemTable;