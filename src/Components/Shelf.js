import Book from "./Book"

const Shelf = ({ title, books }) => {

    return (

        <div className="bookshelf">
            <h4 className="bookshelf-title mt-4">{title}</h4>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <Book />
                </ol>
            </div>
        </div>
    )
}

export default Shelf
