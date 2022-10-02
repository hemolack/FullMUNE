import React, { useState } from 'react';
import OracleControls from './OracleControls';
// 
import classes from './Oracle.module.css';

const OracleLog = (props) => {
    const [question, setQuestion] = useState('');

    return (
        <div>
            <OracleControls ask={props.ask} question={question} setQuestion={setQuestion} />
            <div className={classes.OracleLog}>
                {props.story.map((item, i) => {
                    let icon = item.type === 'q' ? '👥' : '💻';
                    return <div key={i} className={item.type === 'q' ? classes.Question : classes.Answer}>{icon} {item.text}</div> })}
            </div>
        </div>
    )
};

export default OracleLog;