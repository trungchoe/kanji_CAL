import React, {Component} from 'react';
import Word from "./Word";
import {Button} from 'reactstrap';
import './ShowWord.css'

class ShowWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showListWord: true
    }
  }

  handleShowListWord = () => {
    this.setState({showListWord: !this.state.showListWord})
  }

  render() {
    const {dictionary} = this.props;
    return (
      <div>
        {
          this.state.showListWord &&
          <div style={styles.container}>
            {
              dictionary.map((item, index) => {
                return (
                  <Word word={item} key={index}
                        editWord={this.props.editWord}
                        deleteWord={this.props.deleteWord}/>
                )
              })
            }
          </div>
        }
        {/*<button style={styles.button} onClick={this.handleShowListWord.bind(this)}>List word</button>*/}
        <Button
          className="button-show" color="warning"
          onClick={this.handleShowListWord.bind(this)}>
          {this.state.showListWord ? 'Hide list word' : 'List word'}
        </Button>
      </div>
    );
  }
}

export default ShowWord;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    /*justifyContent: 'space-evenly',*/
    marginLeft: '4%',
    marginRight: '2%',
    marginTop: 20,
  },
  button: {
    width: '50%',
    height: 35,
    backgroundColor: '#ffc107',
    marginTop: 20,
    borderRadius: 10,
  }

};