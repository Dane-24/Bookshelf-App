import React, { Component } from 'react';
import Booktotal from './Bookcase';
import OpenSearchButton from './OpenSearchButton';

class ListBooks extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Booktotal bookshelves={bookshelves} books={books} onMove={onMove} />
        <OpenSearchButton />
      </div>
    );
  }
}

export default ListBooks;
