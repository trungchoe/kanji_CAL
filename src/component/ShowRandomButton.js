import React, { Component } from 'react';
import ShowRandomResult from './ShowRandomResult'

import { Button, Row, Col } from 'reactstrap';

class ShowRandomButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomList: []
    };
    this.handleRandom = this.handleRandom.bind(this)
  }

  handleRandom() {
    let n = this.props.dictionary.length;
    let random = Math.floor(Math.random() * n);
    
    this.state.randomList.push(this.props.dictionary[random])
    this.setState({randomList: this.state.randomList})
    console.log(this.state.randomList)
  }

  handleDelete = (index) => {
    this.state.randomList.splice(index, 1)
    this.setState({randomList: this.state.randomList})
  }

  render() {
    const showRandom = this.state.randomList.map((random, key) =>(
      <ShowRandomResult
        key= {key}
        random= {random}
        onDelete = {() => this.handleDelete(key)}
      />
    ))
    return (
      <div>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
          <hr />
            <h3>Did you remember? Click "Random" to check</h3>
            <Button color="warning" onClick={this.handleRandom}>Random</Button>
          </Col>

          <Col sm="4" md={{ size: 6, offset: 3 }}>
            <hr />
            {showRandom}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShowRandomButton;