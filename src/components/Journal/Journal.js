import React from 'react';
import AIService from '../../services/aiService';
import classes from './Journal.module.css';

const Journal = (props) => {
    const click= () => { 
        AIService.getCompletion('Generate a name, race, class, stats, background, and physical description for a new entity in a fantasy role-playing game', 
          (data) => { 
            // console.info('result', data) 
            console.info('result object', JSON.parse(data.choices[0].message.content))
          }
      )}

    return <div className={classes.Journal}><button onClick={click}>👤</button></div>
}

export default Journal;