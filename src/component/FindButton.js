import React, { Component } from 'react';
import ShowFindResult from './ShowFindResult'
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';

class FindButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      findWord: '',
      resultFindWord: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleFindWord = this.handleFindWord.bind(this)
}
  
  handleChange(event) {
    this.setState({findWord: event.target.value})
  }

  handleFindWord(event){
    const dicts = this.props.dictionary;
    const findWord = this.state.findWord;
    for(let i = 0; i < dicts.length; i++){
      if(dicts[i].furigana === findWord){
        this.state.resultFindWord.push(dicts[i]);
        this.setState({resultFindWord: this.state.resultFindWord});
      }
    }
    this.setState({findWord: ''})
    event.preventDefault()
  }

  handleDelete = (index) => {
    this.state.resultFindWord.splice(index, 1)
    this.setState({resultFindWord: this.state.resultFindWord})
  }

  render() {
    var resultShow = this.state.resultFindWord.map((result, key) => (
      <ShowFindResult
        key = {key}
        result= {result}
        onDelete = {() => this.handleDelete(key)}
      />
    ))

    return (
      <div>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>Kanji - Click and Learn</h1>
            <Form>
              <FormGroup row>
                <Col sm={10}>
                <Input 
                  type="text" 
                  name="inputword" 
                  placeholder="Search a word by hiragana..."
                  value={this.state.findWord}
                  onChange={this.handleChange}
                ></Input>
                </Col>
                <Button color="warning" onClick={this.handleFindWord}>Search</Button>
              </FormGroup>
            </Form>
            
          </Col>
        </Row>
        <div>
        {resultShow}
        </div>
      </div >
    );
  }
}

export default FindButton;