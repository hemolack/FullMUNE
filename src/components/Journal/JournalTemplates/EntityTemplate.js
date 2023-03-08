import React from 'react';
import classes from '../Journal.module.css';

const EntityTemplate = (props) => {
    let statBlock = [];
    for(const property in props.entry.stats) {
        statBlock.push(<div key={property} className={classes.StatEntry}>{property.charAt(0).toUpperCase() + property.slice(1)}: {props.entry.stats[property]}</div>)
    }
    
    return (
        <React.Fragment>
            <div>Name: {props.entry.name}</div>
            <div>Race: {props.entry.race}</div>
            <div>Class: {props.entry.class}</div>
            <div>Stats:
                {statBlock}
            </div>
            <div>Background: {props.entry.background}</div>
            <div>Description: {props.entry.physical_description}</div>
        </React.Fragment>
    )
}

export default EntityTemplate;