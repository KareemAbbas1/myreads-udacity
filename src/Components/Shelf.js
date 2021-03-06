import Book from "./Book"

const Shelf = ({ title, books, updateShelf }) => {

    return (

        <div className="bookshelf">
            <h4 className="bookshelf-title mt-4">{title}</h4>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(b => (
                        <li key={b.id} >
                            <Book book={b} updateShelf={updateShelf} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Shelf
