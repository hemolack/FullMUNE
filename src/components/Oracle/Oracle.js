import React, { useState } from 'react';
import * as oracleService from '../../services/oracleService';
import classes from './Oracle.module.css';
import faders from '../Fader.module.css';

const Oracle = () => {
    
    const [textClasses, setTextClasses] = useState([ classes.OracleText, faders.FadeIn ]);
    const [oracle, setOracle] = useState('');
    const [strikes, setStrikes] = useState(0);
    const [interventionPoints, setInterventionPoints] = useState(0);

    const consultOracle = () => {
        setTextClasses([ classes.OracleText, faders.FadeOut ]);
        setTimeout(() => {
            let answer = oracleService.getOracle();
            console.info(answer);
            setOracle(answer.answer);
            setInterventionPoints(interventionPoints + answer.interventionPoints);
            setStrikes(strikes + 1);
            setTextClasses([ classes.OracleText, faders.FadeIn ]);
        }, 500);
    }

    let strikeCount = '';
    for(let i = 0; i < strikes; ++i) {
        strikeCount += '* ';
    }

    let interventionCount = '';
    for(let i = 0; i < interventionPoints; ++i) {
        interventionCount += '! ';
    }

    console.info('IP: ', interventionPoints);
    return (
        <div title="Oracle" className={classes.OracleContainer} onClick={consultOracle}>
            <span className={textClasses.join(' ')}>{oracle}</span>
            <span className={classes.StrikeCounter}>{strikeCount}</span>
            <span className={classes.InterventionPointCount}>{interventionCount}</span>
        </div>
    )
}

export default Oracle;