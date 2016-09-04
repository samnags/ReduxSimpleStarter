// by doing export default, any other file can import reducer_books and will get this function
export default function() {
  return [
    { title: 'JavaScript', pages: 101 },
    { title: 'Harry Potter', pages: 39 },
    { title: 'The Dark Tower', pages: 400 },
    { title: 'Eloquent Ruby', pages: 4 }
  ]
}
