import Book from "./Book"
import { useEffect } from "react";
import { getAll } from "../BooksAPI";


const Shelf = ({ title, books }) => {

    // const book ={
    //     id:"nggnmAEACAAJ",
    //     title:"The Linux Command Line",
    //     authors:['William E. Shotts, Jr.'],
    //     img:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //     shelf:"currentlyReading"
    // };

   

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
