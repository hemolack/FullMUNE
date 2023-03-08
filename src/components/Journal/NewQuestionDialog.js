import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const NewQuestionDialog = (props) => {
    const [question, setQuestion] = useState('');
    const [name, setName] = useState('');

    return (
        <Modal show={props.show} onHide={() => { setQuestion(''); setName(''); props.close(); }} size="xl">
            <Modal.Header closeButton><Modal.Title>Ask a Question</Modal.Title></Modal.Header>
            <Modal.Body>
                Topic: <input value={name} onChange={(event) => { setName(event.target.value) }} /> <br />
                Question: <br />
                <textarea value={question} onChange={(event) => { setQuestion(event.target.value) }}></textarea>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.ask(name, question)}>Ask</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewQuestionDialog;