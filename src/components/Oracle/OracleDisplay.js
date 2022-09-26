import React, { useEffect, useState } from 'react';
import classes from './Oracle.module.css';
import faders from '../Fader.module.css';

const OracleDisplay = (props) => {
    const [textClasses, setTextClasses] = useState([ classes.OracleText, faders.FadeIn ]);
    const [oracle, setOracle] = useState('');

    useEffect(() => {
        setTextClasses([ classes.OracleText, faders.FadeOut ]);
        setTimeout(() => {
            setTextClasses([ classes.OracleText, faders.FadeIn ]);
            setOracle(props.oracle);
        }, 250);
    }, [props.oracle]);

    let strikeCount = '';
    for(let i = 0; i < props.strikes; ++i) {
        strikeCount += '* ';
    }

    let interventionCount = '';
    for(let i = 0; i < props.interventionPoints; ++i) {
        interventionCount += '! ';
    }

    return (
        <div title="Oracle" className={classes.OracleContainer}>
            <span className={textClasses.join(' ')}>{oracle}</span>
            <span className={classes.StrikeCounter}>{strikeCount}</span>
            <span className={classes.InterventionPointCount}>{interventionCount}</span>
        </div>
    )
}

export default OracleDisplay;