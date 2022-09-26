import React, { useState } from 'react';
import * as oracleService from '../../services/oracleService';
import classes from './Oracle.module.css';

const OracleLog = (props) => {
    const [question, setQuestion] = useState('');

    const checkInput = (event) => {
        if(event.key === 'Enter' && question !== '') {
            props.ask(question, 0);
            setQuestion('');
        }
    }

    return (
        <div className={classes.OracleLog}>
            <input type="text" value={question} onChange={(e) => { setQuestion(e.target.value) }} onKeyDown={checkInput} /> 
            <button disabled={question === ''} onClick={() => { props.ask(question, oracleService.NORMAL); setQuestion(''); }}>Ask</button><br />
            <button disabled={question === ''} onClick={() => { props.ask(question, oracleService.YES_OR_NO); setQuestion(''); }}>Yes or No</button>
            <button disabled={question === ''} onClick={() => { props.ask(question, oracleService.LIKELY_NO); setQuestion(''); }}>Likely Yes</button>
            <button disabled={question === ''} onClick={() => { props.ask(question, oracleService.LIKELY_YES); setQuestion(''); }}>Likely No</button>
            <button onClick={() => { props.ask('Is everything normal?', 1) }}>Normal?</button>
        </div>
    )
};

export default OracleLog;