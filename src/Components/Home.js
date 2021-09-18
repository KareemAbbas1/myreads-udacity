
// import { BrowserRouter as Router, } from 'react-router-dom'
// import Header from './Header'
// import Layout from './Layout'
import Header from './Header'
// import { Container } from 'react-bootstrap'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Shelf from './Shelf'

const Home = () => {
    return (
        <div>
            <Header />
            <Layout>
                <Shelf title='Currently Reading'/>
                <Shelf title='Want to Read'/>
                <Shelf title='Read'/>
            </Layout>
        </div>
    )
}

export default Home
