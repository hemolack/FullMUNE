import React from 'react';
import classes from '../Journal.module.css';

const NoteTemplate = (props) => {
    let statBlock = [];
    for(const property in props.entry.stats) {
        statBlock.push(<div key={property} className={classes.StatEntry}>{property.charAt(0).toUpperCase() + property.slice(1)}: {props.entry.stats[property]}</div>)
    }
    
    return (
        <React.Fragment>
            <div>{props.entry.note}</div>
        </React.Fragment>
    )
}

export default NoteTemplate;