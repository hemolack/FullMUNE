import React from 'react';
import { Button } from 'react-bootstrap';
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
            <label htmlFor="question">Question: </label> 
            <div className="input-group">
                <input id="question" className="form-control" type="text" value={props.question} onChange={(e) => { props.setQuestion(e.target.value) }} onKeyDown={checkInput} /> 
                <Button variant="primary" disabled={props.question === ''} onClick={() => { props.ask(props.question, oracleService.NORMAL); props.setQuestion(''); }}>Ask</Button>
                <Button variant="secondary" disabled={props.question === ''} onClick={() => { props.ask(props.question, oracleService.YES_OR_NO); props.setQuestion(''); }}>Yes or No</Button>
                <Button variant="secondary" disabled={props.question === ''} onClick={() => { props.ask(props.question, oracleService.LIKELY_NO); props.setQuestion(''); }}>Likely Yes</Button>
                <Button variant="secondary" disabled={props.question === ''} onClick={() => { props.ask(props.question, oracleService.LIKELY_YES); props.setQuestion(''); }}>Likely No</Button>
                <Button variant="info" onClick={props.normal}>Normal?</Button>
                <Button variant="success" disabled={props.question === ''} onClick={() => { props.log(props.question); props.setQuestion(''); }}>Log</Button>
            </div>
        </div>
    )
};

export default OracleControls;