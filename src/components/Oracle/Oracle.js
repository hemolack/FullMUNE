import React, { useState } from 'react';
import OracleDisplay from './OracleDisplay';
import * as oracleService from '../../services/oracleService';
import classes from './Oracle.module.css';
import faders from '../Fader.module.css';

const Oracle = () => {
    
    const [textClasses, setTextClasses] = useState([ classes.OracleText, faders.FadeIn ]);
    const [question, setQuestion] = useState('');
    const [oracle, setOracle] = useState('');
    const [strikes, setStrikes] = useState(0);
    const [interventionPoints, setInterventionPoints] = useState(0);

    const consultOracle = () => {
        setTextClasses([ classes.OracleText, faders.FadeOut ]);
        setTimeout(() => {
            let answer = oracleService.getOracle();
            setOracle(answer.answer);
            setInterventionPoints(interventionPoints + answer.interventionPoints);
            setStrikes(strikes + 1);
            setTextClasses([ classes.OracleText, faders.FadeIn ]);
        }, 500);
    }

    return (
        <React.Fragment>
            <OracleDisplay textClasses={textClasses} oracle={oracle} consultOracle={consultOracle} strikes={strikes} interventionPoints={interventionPoints} />
            <input type="text" value={question} onChange={(e) => { setQuestion(e.target.value) }} /> 
        </React.Fragment>
    )
}

export default Oracle;