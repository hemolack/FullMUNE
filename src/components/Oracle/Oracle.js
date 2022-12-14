import React, { useCallback, useEffect, useState } from 'react';
import OracleDisplay from './OracleDisplay';
import OracleLog from './OracleLog';
import * as oracleService from '../../services/oracleService';
import * as interventionService from '../../services/interventionService';
import * as tweneService from '../../services/tweneService';

const Oracle = (props) => {
    const [oracle, setOracle] = useState('');
    const [strikes, setStrikes] = useState(0);
    const [interventionPoints, setInterventionPoints] = useState(0);
    const story = props.story;
    const setStory = props.setStory;

    const addStory = useCallback((question, answer) => {
        let tempStory = [...story];
        if(question) {
            tempStory.push({ text: question, type: 'q' });
        }
        if(answer) {
            tempStory.push({ text: answer, type: 'a' });
        }
        setStory(tempStory);
    }, [story, setStory]);

    const intervention = useCallback(() => {
        let dmIntervention = interventionService.getIntervention();
        alert(dmIntervention.description);
        addStory(null, dmIntervention.description);
    }, [addStory]);

    useEffect(() => {
        if(interventionPoints === 3) {
            setInterventionPoints(0);
            intervention();
        }
    }, [intervention, interventionPoints]);

    const consultOracle = (question, mode) => {
        setTimeout(() => {
            let answer;
            if(strikes > 2) {
                setStrikes(0);
                mode = oracleService.YES_OR_NO;
            }
            answer = oracleService.getOracle(mode);
            if(answer.answer === 'Yes.' || answer.answer === 'No.') {
                setStrikes(0);
            }
            else {
                setStrikes(strikes => strikes + 1);
            }
            setOracle(answer.answer);
            addStory(question, answer.answer);
            setInterventionPoints(interventionPoints => interventionPoints + answer.interventionPoints);
        }, 500);
    }

    const isEverythingNormal = () => {
        setTimeout(() => {
            let answer;
            answer = oracleService.getOracle(oracleService.YES_OR_NO);
            setOracle(answer.answer);
            if(answer.answer === 'No.') {
                addStory('Is everything normal?', `${answer.answer}  ${tweneService.getTweneEntry()}`);
            }
            else {
                addStory('Is everything normal?', answer.answer);
            }
        }, 500);
    }

    return (
        <React.Fragment>
            <OracleDisplay oracle={oracle} consultOracle={consultOracle} strikes={strikes} interventionPoints={interventionPoints} />
            <OracleLog ask={consultOracle} {...props} log={(question) => addStory(question, null)} normal={isEverythingNormal} />
        </React.Fragment>
    )
}

export default Oracle;