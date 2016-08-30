import React, { Component } from 'react';
import { connect } from 'react-redux';
// by using curly braces, we're importing a single property vs entire object

// container - React component that has direct connection to state managed by Redux

// move containers into their old folder



class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// how does this function work? State isn't available in broader scope but is within method

function mapStateToProps(state) {
  // Purpose is to take application state as argument. whatever is returned will show up as props inside of BookList
  return {
      books: state.books
  };
}


// In container files, we don't export the component, we export the container
// That's why we don't do export default BookList but rather export default connect...

export default connect(mapStateToProps)(BookList);
// connect takes a function and a component and makes the component into a container
