import React, { Component } from 'react';

class ListWord extends Component {
  render() {
  	const {
      id,
      kanji,
      furigana,
      meaning
    } = this.props;
    return (
		<div className="">
      <tr>
        <td>{id}</td>
        <td>{kanji}</td>
        <td>{furigana}</td>
        <td>{meaning}</td>
      </tr>
		</div>
    );
	}
}

export default ListWord;