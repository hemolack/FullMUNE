import React, { useState } from 'react';
import OracleDisplay from './OracleDisplay';
import OracleLog from './OracleLog';
import * as oracleService from '../../services/oracleService';

const Oracle = () => {
    const [oracle, setOracle] = useState('');
    const [strikes, setStrikes] = useState(0);
    const [interventionPoints, setInterventionPoints] = useState(0);

    const consultOracle = (question, mode) => {
        // TODO: Add question to the list
        setTimeout(() => {
            let answer;
            if(strikes > 2) {
                setStrikes(0);
                mode = oracleService.YES_OR_NO;
            }
            answer = oracleService.getOracle(mode);
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