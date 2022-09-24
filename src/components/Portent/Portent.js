import React, { useState } from 'react';
import * as portentService from '../../services/portentService';
import classes from './Portent.module.css';
import faders from '../Fader.module.css';

const Portent = () => {
    const [textClasses, setTextClasses] = useState([ faders.FadeIn ]);
    const [portent, setPortent] = useState({ adjective: {}, noun: {}});

    const readPortent = () => {
        setTextClasses([ classes.PortentText, faders.FadeOut ]);
        setTimeout(() => {
            setPortent(portentService.getPortent());
            setTextClasses([ classes.PortentText, faders.FadeIn ]);
        }, 500);
    }

    return (
        <div title="Portents" className={classes.PortentContainer} onClick={readPortent}>
            <div className={textClasses.join(' ')} title={portent.adjective.word + ': ' + portent.adjective.definition}>{portent.adjective.word}</div> &nbsp; 
            <div className={textClasses.join(' ')} title={portent.noun.word + ': ' + portent.noun.definition}>{portent.noun.word}</div>
        </div>
    )
}

export default Portent;
