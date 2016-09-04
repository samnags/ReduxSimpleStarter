// all reducers get two arguments: current state and action

// state argument is not application state but rather state that this reducer is responsible for

// Reducer is going to be called whennever action is dispatched. Reducer will thus be called all the time even if reducer doesn't care about this action

// Have to default state to null because we can't allow our reducer to return undefined

export default function(state = null, action) {
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload
  }
  return state;
  // above case if we don't are about action
}

// no manipulating state in reducer. return fresh object



// nevermind
// We change state default from null to an object because our components will render and try to get this.props.book.title but book is null
