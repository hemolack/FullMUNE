import React from 'react';
import * as oracleService from '../../services/oracleService';
import classes from './Oracle.module.css';

const OracleControls = (props) => {
    const checkInput = (event) => {
        if(event.key === 'Enter' && props.question !== '') {
            props.ask(props.question, 0);
            props.setQuestion('');
        }
    }

    return(
        <div className={classes.OracleControls}>
            <input type="text" value={props.question} onChange={(e) => { props.setQuestion(e.target.value) }} onKeyDown={checkInput} /> 
            <button disabled={props.question === ''} onClick={() => { props.ask(props.question, oracleService.NORMAL); props.setQuestion(''); }}>Ask</button><br />
            <button disabled={props.question === ''} onClick={() => { props.ask(props.question, oracleService.YES_OR_NO); props.setQuestion(''); }}>Yes or No</button>
            <button disabled={props.question === ''} onClick={() => { props.ask(props.question, oracleService.LIKELY_NO); props.setQuestion(''); }}>Likely Yes</button>
            <button disabled={props.question === ''} onClick={() => { props.ask(props.question, oracleService.LIKELY_YES); props.setQuestion(''); }}>Likely No</button>
            <button onClick={() => { props.ask('Is everything normal?', 1) }}>Normal?</button>
        </div>
    )
};

export default OracleControls;