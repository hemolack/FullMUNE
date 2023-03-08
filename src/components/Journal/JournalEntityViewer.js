import React from 'react';
import { Modal } from 'react-bootstrap';
import withTemplate from './JournalTemplates/withTemplate';

const JournalEntryViewer = (props) => {
    if(!props.entry) {
        return null;
    }
    
    const Template = withTemplate(props.entry);

    return (
        <Modal show={props.entry} onHide={props.close} size="xl">
            <Modal.Header closeButton><Modal.Title>{props.entry.name}</Modal.Title></Modal.Header>
            <Modal.Body>
                <Template />
            </Modal.Body>
        </Modal>
    );
}

export default JournalEntryViewer;