import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
          <div>Title: {this.props.book.title}</div>
          <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);


// we connected our component to redux with connect and with mapStateToProps thus making it a container

// book will now be a prop on state because we mapped our application state to the BookDetail component
