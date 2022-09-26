import React, { useState } from 'react';
import OracleDisplay from './OracleDisplay';
import OracleLog from './OracleLog';
import * as oracleService from '../../services/oracleService';

const Oracle = () => {
    const [oracle, setOracle] = useState('');
    const [strikes, setStrikes] = useState(0);
    const [interventionPoints, setInterventionPoints] = useState(0);

    const consultOracle = (question, likely) => {
        
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
        }, 500);
    }

    return (
        <React.Fragment>
            <OracleDisplay oracle={oracle} consultOracle={consultOracle} strikes={strikes} interventionPoints={interventionPoints} />
            <OracleLog ask={consultOracle} />
        </React.Fragment>
    )
}

export default Oracle;