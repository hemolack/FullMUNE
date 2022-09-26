import React, { useState } from 'react';
import OracleDisplay from './OracleDisplay';
import OracleLog from './OracleLog';
import * as oracleService from '../../services/oracleService';
import classes from './Oracle.module.css';
import faders from '../Fader.module.css';

const Oracle = () => {
    
    const [textClasses, setTextClasses] = useState([ classes.OracleText, faders.FadeIn ]);
    const [oracle, setOracle] = useState('');
    const [strikes, setStrikes] = useState(0);
    const [interventionPoints, setInterventionPoints] = useState(0);

    const consultOracle = (question, likely) => {
        setTextClasses([ classes.OracleText, faders.FadeOut ]);
        setTimeout(() => {
            let answer;
            if(likely === 0) {
                answer = oracleService.getOracle();
            }
            else if(likely > 0) {
                answer = oracleService.likelyNo();
            }
            else {
                answer = oracleService.likelyYes();
            }
            setOracle(answer.answer);
            setInterventionPoints(interventionPoints + answer.interventionPoints);
            setStrikes(strikes + 1);
            setTextClasses([ classes.OracleText, faders.FadeIn ]);
        }, 500);
    }

    return (
        <React.Fragment>
            <OracleDisplay textClasses={textClasses} oracle={oracle} consultOracle={consultOracle} strikes={strikes} interventionPoints={interventionPoints} />
            <OracleLog ask={consultOracle} />
        </React.Fragment>
    )
}

export default Oracle;