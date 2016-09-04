// this is an action creator
export function selectBook(book) {
  // needs to return an action
    // aka an object with at type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
