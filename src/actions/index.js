export function selectBook(book) {
  // selectBook is an ActionCreator and needs to return an action
  // an object with a type property (and sometimes a payload)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}