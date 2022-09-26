import React, { useState } from 'react';
import classes from './Oracle.module.css';

const OracleLog = (props) => {
    const [question, setQuestion] = useState('');

    return (
        <div className={classes.OracleLog}>
            <input type="text" value={question} onChange={(e) => { setQuestion(e.target.value) }} /> 
            <button onClick={() => { props.ask(question, 0) }}>Ask</button><br />
            <button onClick={() => { props.ask(question, -1) }}>Likely Yes</button>
            <button onClick={() => { props.ask(question, 1) }}>Likely No</button>
        </div>
    )
};

export default OracleLog;