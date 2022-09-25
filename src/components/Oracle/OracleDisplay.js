import React, { useState } from 'react';
import classes from './Oracle.module.css';
import faders from '../Fader.module.css';

const OracleDisplay = (props) => {

    let strikeCount = '';
    for(let i = 0; i < props.strikes; ++i) {
        strikeCount += '* ';
    }

    let interventionCount = '';
    for(let i = 0; i < props.interventionPoints; ++i) {
        interventionCount += '! ';
    }

    console.info(props.strikes, props.interventionPoints, interventionCount);
    return (
        <div title="Oracle" className={classes.OracleContainer} onClick={props.consultOracle}>
            <span className={props.textClasses.join(' ')}>{props.oracle}</span>
            <span className={classes.StrikeCounter}>{strikeCount}</span>
            <span className={classes.InterventionPointCount}>{interventionCount}</span>
        </div>
    )
}

export default OracleDisplay;