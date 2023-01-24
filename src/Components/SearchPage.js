import { Link } from 'react-router-dom'
import '../App.css'
import Layout from './Layout';
import { useState, useEffect } from 'react';
import * as BooksAPI from '../BooksAPI'
import Book from './Book'


const SearchPage = () => {

  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [newBook, setNewBook] = useState([]);
  const [addNewBook, setAddNewBook] = useState(new Map());

  /*  */
  useEffect(() => {

    BooksAPI.getAll()

      .then(result => {
        setBooks(result)
        setAddNewBook(addBookShelf(result))
      });


  }, []);


  useEffect(() => {

    let searchResult = true;

    if (query) {
      BooksAPI.search(query)
        .then(result => {

          if (result.error) {
            setSearch([]);
          }

          else {
            if (searchResult) {
              setSearch(result);
            }

          }
        })
    }

    return () => {
      searchResult = false;
      setSearch([])
    }
  }, [query])


  useEffect(() => {

    const addBook = search.map(book => {
      if (addNewBook.has(book.id)) {
        return addNewBook.get(book.id);
      }

      else {
        return book;
      }

    })

    setNewBook(addBook)

  }, [search, addNewBook])


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

    BooksAPI.update(book, newShelf)
      .then(() => {
        setBooks(updatedShelf)
      })
  }


  return (

    <Layout>
      <div className="search-books">

        <div className="search-books-bar">
          <Link to='/'><button className="close-search"></button></Link>
          <div className="search-books-input-wrapper">

            <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

          </div>
        </div>

        <div className="search-books-results">
          {
            newBook.length > 0
              ?
              <ol className="books-grid">
                {newBook.map(b => (
                  <li key={b.id} >
                    <Book book={b} updateShelf={updateShelf} />
                  </li>
                ))}
              </ol>
              :
              <div>
                <h4>Search Terms:</h4>
                <p>
                  Android, Art, Artificial Intelligence, Astronomy, Austen, Baseball, Basketball, Bhagat, Biography, Brief, Business, Camus, Cervantes, Christie, Classics, Comics, Cook, Cricket, Cycling, Desai, Design, Development, Digital Marketing, Drama, Drawing, Dumas, Education, Everything, Fantasy, Film, Finance, First, Fitness, Football, Future, Games, Gandhi, History, History, Homer, Horror, Hugo, Ibsen, Journey, Kafka, King, Lahiri, Larsson, Learn, Literary Fiction, Make, Manage, Marquez, Money, Mystery, Negotiate, Painting, Philosophy, Photography, Poetry, Production, Program Javascript, Programming, React, Redux, River, Robotics, Rowling, Satire, Science Fiction, Shakespeare, Singh, Swimming, Tale, Thrun, Time, Tolstoy, Travel, Ultimate, Virtual Reality, Web Development, iOS
                </p>
              </div>
          }
        </div>
      </div>
    </Layout>

  )
}

export default SearchPage

