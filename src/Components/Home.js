
// import { BrowserRouter as Router, } from 'react-router-dom'
// import Header from './Header'
// import Layout from './Layout'
import Header from './Header'
// import { Container } from 'react-bootstrap'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Shelf from './Shelf'
// import {  useState, useEffect } from 'react'
// import { getAll } from '../BooksAPI'



const Home = (books) => {
    // const [books, setBooks] = useState([]);

    return (
        <div>
            <Header />
            <Layout>
                <Shelf title='Currently Reading' />
                {/* <Shelf title='Want to Read' />
                <Shelf title='Read' /> */}
            </Layout>
        </div>
    )
}

export default Home
