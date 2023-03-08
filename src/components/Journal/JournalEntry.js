import React from 'react';
import { JournalType } from './journalHelper';
import classes from './Journal.module.css';

const JournalEntry = (props) => {
    if(props.entry.type === JournalType.ENTITY.type) {
        return (
            <div className={classes.JournalEntry} onClick={() => props.click(props.entry)}>
                <div>{props.entry.icon} {props.entry.name} ({props.entry.race} {props.entry.class})</div>
            </div>
        );
    }
    if(props.entry.type === JournalType.NOTE.type) {
        return (
            <div className={classes.JournalEntry} onClick={() => props.click(props.entry)}>
                <div>{props.entry.icon} {props.entry.name}</div>
            </div>
        )
    }
}

export default JournalEntry;