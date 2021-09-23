
import { Link } from 'react-router-dom'
import Header from './Header'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import BooksList from './BooksList'
import { Button } from 'react-bootstrap'

const Home = () => {

    return (
        <div>
            <Header />
            <Layout>
                <BooksList />

                <div className="open-search">
                    <Link to='/searchpage'><Button>Add Books</Button></Link>
                </div>

            </Layout>
        </div>
    )
}

export default Home
