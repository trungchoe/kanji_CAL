import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col } from 'reactstrap';

const AddButton = (props) => {
	const {
		addWord
	} = props;
	let newWord = {
		kanji: '',
		furigana: '',
		meaning: ''
	}
	const [modal, setModal] = useState(false);
  	const toggle = () => setModal(!modal);
  	function add(){
  		addWord(newWord.kanji, newWord.furigana, newWord.meaning)
    	toggle()
  	}
  	function updateInput(e) {
    	newWord[e.target.name] = e.target.value
  	}
    return (
		<div>
			<Button color="primary" onClick={toggle}>Add</Button>
			<Modal isOpen={modal} toggle={toggle} className="ok">
		        <ModalBody>
		          	<Form>
		            	<FormGroup row>
		            		<Label sm={3}>Kanji</Label>
		              		<Col sm={9}><Input type="text" name="kanji" id="taskID" onChange={updateInput}></Input></Col>
		            	</FormGroup>
		            	<FormGroup row>
		            		<Label sm={3}>Furigana</Label>
		              		<Col sm={9}><Input type="text" name="furigana" id="taskID" onChange={updateInput}></Input></Col>
		            		</FormGroup>
		            	<FormGroup row>
		            		<Label sm={3}>Meaning</Label>
		              		<Col sm={9}><Input type="text" name="meaning" id="taskID" onChange={updateInput}></Input></Col>
		            	</FormGroup>
		          	</Form>
		        </ModalBody>
		        <ModalFooter>
		          	<Button color="primary" onClick={add}>Add</Button>{' '}
		        </ModalFooter>
      		</Modal> 
		</div>
    );
}

export default AddButton;