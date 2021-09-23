
import { Link } from 'react-router-dom'
import Header from './Header'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Shelf from './Shelf'
import { Button } from 'react-bootstrap'


const Home = (books) => {

    return (
        <div>
            <Header />
            <Layout>

                <Shelf title='Currently Reading' />
                <Shelf title='Want to Read' />
                <Shelf title='Read' />

                <div className="open-search">
                    <Link to='/searchpage'><Button>Add Books</Button></Link>
                </div>

            </Layout>
        </div>
    )
}

export default Home
