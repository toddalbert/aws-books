import { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Book } from './models';
import './App.css';

// await DataStore.save(
//   new Book({
//   "title": "The Handmaid's Tale",
//   "author": "Margaret Atwood",
//   "year": 1985,
//   "genre": "Distopian Fiction"
// })
// );

const getData = async () => await DataStore.query(Book);

function App() {
  const [books, setBooks] = useState()

  useEffect(() => {
    getData().then(setBooks).catch(alert)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {!books
          ? <h2>Loading...</h2>
          : <>
              <h1>Books</h1>
              {books.map(book => {
                return (
                  <div key={book.id}>
                    <h3>{book.title} ({book.year})</h3>
                    <p> – {book.author}</p>
                  </div>
                )
              })}
          
            </>
        
        }
      </header>
    </div>
  );
}

export default App;
