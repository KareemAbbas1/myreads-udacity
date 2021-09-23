import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'
import { useState, useEffect } from 'react';


const BooksList = () => {

    /* Books State */

    const [books, setBooks] = useState([]);

    /* Fetch books from API */

    useEffect(() => {
        const fetchBooks = async () => {

            const books = await (BooksAPI.getAll())
            setBooks(books);

        };

        fetchBooks();
    }, []);

    /* Filtering Books */

    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");

    /* Updating Shelves Locally */

    const updateShelf = (book, newShelf) => {

        const updatedShelf = books.map(b => {
    
          if (b.id === book.id) {
            book.shelf = newShelf;
            return book;
          }
    
          return b;
        })

     setBooks(updatedShelf);

    }
    
    
    return (
        <div>

            <Shelf title='Currently Reading' books={currentlyReading} updateShelf={updateShelf}/>
            <Shelf title='Want to Read' books={wantToRead} updateShelf={updateShelf}/>
            <Shelf title='Read' books={read} updateShelf={updateShelf}/>

        </div>

    )
}

export default BooksList
