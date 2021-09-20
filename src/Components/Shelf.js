import Book from "./Book"

const Shelf = (props) => {
    return (

        <div className="bookshelf">
            <h4 className="bookshelf-title mt-4">{props.title}</h4>
            <div className="bookshelf-books">
            <ol className="books-grid">
                <Book />
            </ol>

            </div>
        </div>
    )
}

export default Shelf
