import Book from "./Book"

const Shelf = (props) => {
    return (

        <div className="bookshelf">
            <h2 className="bookshelf-title mt-4">{props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                <Book />
            </ol>

            </div>
        </div>
    )
}

export default Shelf
