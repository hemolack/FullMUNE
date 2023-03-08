import React from 'react';
import { JournalType } from '../journalHelper';
import EntityTemplate from './EntityTemplate';
import NoteTemplate from './NoteTemplate';

const withTemplate = (wrappedEntry) => {
    class Template extends React.Component {
        render() {
            if(wrappedEntry.type === JournalType.ENTITY.type) {
                return <EntityTemplate entry={wrappedEntry} />
            }
            else if(wrappedEntry.type === JournalType.NOTE.type) {
                return <NoteTemplate entry={wrappedEntry} />
            }
            else {
                return <div>{wrappedEntry.type}</div>
            }
        }
    }

    return Template;
}

export default withTemplate;