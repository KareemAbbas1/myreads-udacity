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

    return (
        <div>

            <Shelf title='Currently Reading' books={currentlyReading} />
            <Shelf title='Want to Read' books={wantToRead} />
            <Shelf title='Read' books={read} />
        </div>

    )
}

export default BooksList
