import 'bootstrap/dist/css/bootstrap.min.css'


const Book = ({ book, updateShelf }) => { 


    return (
        <div>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : "No Backgroung Image" })`  }}></div>
                    <div className="book-shelf-changer" bg='primary'>
                        <select defaultValue={book.shelf ? book.shelf : "none"} onChange={(e) => updateShelf(book, e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : "No authors"}</div>
            </div>
        </div>
    )
}

export default Book