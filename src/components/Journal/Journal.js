import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import JournalEntry from './JournalEntry';
import JournalEntityViewer from './JournalEntityViewer';
import AIService from '../../services/aiService';
import classes from './Journal.module.css';
import { JournalType } from './journalHelper';
import NewQuestionDialog from './NewQuestionDialog';

const Journal = (props) => {
    const [entries, setEntries] = useState([]);
    const [entry, setEntry] = useState(null);
    const [showNewQuestion, setShowNewQuestion] = useState(false);
    const [disableEntityButton, setDisableEntityButton] = useState(false);

    const newEntity = () => { 
        if(!disableEntityButton) {
            setDisableEntityButton(true);
            AIService.getCompletion('Generate a name, race, class, stats, background, and physical_description for a new entity in a fantasy role-playing game', 
                (data) => { 
                    let tempEntries = [...entries];
                    let tempEntry = JSON.parse(data.choices[0].message.content);
                    tempEntry['icon'] = JournalType.ENTITY.icon;
                    tempEntry['type'] = JournalType.ENTITY.type;
                    tempEntries.push(tempEntry);
                    setEntries(tempEntries);
                    setDisableEntityButton(false);
                });
        }
    }

    const newQuestion = (name, question) => { 
        AIService.getCompletion(question,
          (data) => { 
              let tempEntries = [...entries];
              let tempEntry = { name: name, note: data.choices[0].message.content, type: JournalType.NOTE.type, icon: JournalType.NOTE.icon };
              tempEntries.push(tempEntry);
              setEntries(tempEntries);
          }, false);
      }

    const entryList = entries.map((item, i) => {
        return <JournalEntry key={i} entry={item} click={(item) => { setEntry(item); }} />
    });

    return (
        <div className={classes.Journal}>
            <div className={classes.JournalTitle}>Journal</div>
            <div className={classes.JournalControls}>
                <Button variant="light" onClick={newEntity} title="New Entity" disabled={disableEntityButton}>👤</Button>
                <Button variant="light" onClick={() => setShowNewQuestion(true)} title="New Topic">❓</Button>
            </div>
            
            {entryList}
            <JournalEntityViewer entry={entry}  close={() => setEntry(null) } />
            <NewQuestionDialog show={showNewQuestion} ask={newQuestion} close={() => setShowNewQuestion(false)} />
        </div>
    );
}

export default Journal;