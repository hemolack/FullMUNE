import React, { useEffect, useRef, useState } from 'react';
import OracleControls from './OracleControls';
// 
import classes from './Oracle.module.css';

const OracleLog = (props) => {
    const [question, setQuestion] = useState('');
    const endOfLog = useRef(null);
    let story = props.story;

    useEffect(() => {
        if(story.length > 0) {
            endOfLog.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [story]);

    return (
        <div>
            <OracleControls {...props} question={question} setQuestion={setQuestion} />
            <div className={classes.OracleLog}>
                {props.story.map((item, i) => {
                    let icon = item.type === 'q' ? '👥' : '💻';
                    return <div key={i} className={item.type === 'q' ? classes.Question : classes.Answer}>{icon} {item.text}</div> })}
                <div id="endOfLog" className={classes.EndOfLog} ref={endOfLog} />
            </div>
        </div>
    )
};

export default OracleLog;