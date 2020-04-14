import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col } from 'reactstrap';

const EditButton = (props) => {
  const {
    displayWord,
    editWord,
    deleteWord
  } = props;

  let newWord = displayWord

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function edit() {
    editWord(displayWord.id, newWord.kanji, newWord.furigana, newWord.meaning)
    toggle()
  }

  function deleteTarget() {
    deleteWord(displayWord.id)
    toggle()
  }

  function updateInput(e) {
    newWord[e.target.name] = e.target.value
    console.log(newWord)
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>Edit | Delete</Button>
      <Modal isOpen={modal} toggle={toggle} className={displayWord.id.toString()}>
        <ModalBody>
          <Form>
            <FormGroup row>
            <Label sm={3}>Kanji</Label>
              <Col sm={9}><Input type="text" name="kanji" id="taskID" placeholder={displayWord.kanji} onChange={updateInput}></Input></Col>
            </FormGroup>

            <FormGroup row>
            <Label sm={3}>Furigana</Label>
              <Col sm={9}><Input type="text" name="furigana" id="taskID" placeholder={displayWord.furigana} onChange={updateInput}></Input></Col>
            </FormGroup>

            <FormGroup row>
            <Label sm={3}>Meaning</Label>
              <Col sm={9}><Input type="text" name="meaning" id="taskID" placeholder={displayWord.meaning} onChange={updateInput}></Input></Col>
            </FormGroup>
          </Form>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>Update</Button>{' '}
          <Button color="danger" onClick={deleteTarget}>Delete</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditButton;