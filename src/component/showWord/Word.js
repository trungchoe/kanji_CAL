import React, {Component} from 'react';
import './Word.css';
import EditButton from '../EditButton'

export default class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showYomikata: false,
      showImi: false
    }
  }

  handleShowImi = () => {
    this.setState({showImi: !this.state.showImi})
  };

  handleShowYomikata = () => {
    this.setState({showYomikata: !this.state.showYomikata})
  };

  render() {
    const word = this.props.word;
    return (
      <div style={styles.container}>
        <span style={styles.kanji}>{word.kanji}</span>
        <div style={styles.container2}>
          <button
            style={styles.button}
            className="button1"
            onClick={this.handleShowYomikata.bind(this)}>読み方
          </button>
          {
            this.state.showYomikata &&
            <span style={styles.span}>{word.furigana}</span>
          }
          <button
            className="button1"
            style={styles.button} onClick={this.handleShowImi.bind(this)}>意味</button>
          {
            this.state.showImi &&
            <span style={styles.span}>{word.meaning}</span>
          }
          <EditButton 
            displayWord = {word}
            editWord = {this.props.editWord}
            deleteWord = {this.props.deleteWord}/>

        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '31%',
    backgroundColor: '#fff',
    boxShadow: "0px 1px 11px -2px #9E9E9E",
    marginTop: 20,
    marginRight: 25,
    borderRadius: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

  },
  kanjiWrapper: {
    width: 150,
    height: 200,
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
  kanji: {
    fontWeight: 'bold',
    fontSize: 90,
    width: 150,
    height: 150,
  },
  button: {
    marginTop: 20,
    border: 'none',
    color: '#00f',
    textDecoration: 'underline',
    fontStyle: 'normal',
    backgroundColor: 'white',
    padding: 0,
    textAlign: 'left'
  },
  span: {
    textAlign: 'left'
  }
};