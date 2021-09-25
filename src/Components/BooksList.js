import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'
import { useState, useEffect } from 'react';


const BooksList = () => {

    /* Books State */

    const [books, setBooks] = useState([]);
    const [addNewBook, setAddNewBook] = useState(new Map());
    const [newBook, setNewBook] = useState([]);

    /* Fetch books from API */

    useEffect(() => {
        const fetchBooks = async () => {

            const books = await (BooksAPI.getAll())
            setBooks(books);
            setAddNewBook(addBookShelf(books));

        };

        fetchBooks();
    }, []);

    /* Filtering Books */

    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");

    /* Updating Shelves Locally */

    useEffect(() => {

        const addBook = books.map(book => {
            if (addNewBook.has(book.id)) {
                return addNewBook.get(book.id);
            }

            else {
                return book;
            }

        })

        setNewBook(addBook)

    }, [books, addNewBook])

    const addBookShelf = (books) => {
        const map = new Map();
        books.map(book => map.set(book.id, book));
        return map;
    }

    const updateShelf = (book, newShelf) => {

        const updatedShelf = books.map(b => {

            if (b.id === book.id) {
                book.shelf = newShelf;
                return book;
            }

            return b;
        })

        if (!addNewBook.has(book.id)) {
            book.shelf = newShelf
            updatedShelf.push(book)
        }
        setBooks(updatedShelf);
        BooksAPI.update(book, newShelf);
    }


    // const updateShelf = (book, newShelf) => {

    //     const updatedShelf = books.map(b => {

    //         if (b.id === book.id) {
    //             book.shelf = newShelf;
    //             return book;
    //         }

    //         return b;
    //     })

    //     updatedShelf.push(book);
    //     setBooks(updatedShelf);

    // }


    return (
        <div>

            <Shelf title='Currently Reading' books={currentlyReading} updateShelf={updateShelf} />
            <Shelf title='Want to Read' books={wantToRead} updateShelf={updateShelf} />
            <Shelf title='Read' books={read} updateShelf={updateShelf} />

        </div>

    )
}

export default BooksList
