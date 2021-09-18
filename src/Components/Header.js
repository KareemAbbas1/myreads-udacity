import { BrowserRouter as Router, Link, Route, } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Layout from './Layout'
import SearchPage from './SearchPage'
// import { useLocation } from 'react-router-dom'




const Header = () => {
    return (
        <div>
            <Router>

                <div className='list-books-title'>
                    <Layout>
                        <div className='d-flex justify-content-between'>
                            <h1>My Reads</h1>
                            <Route path='/searchpage' exact component={SearchPage} />
                            <Link to='/searchpage'><Button className='m-2' variant='light'>Add Books</Button></Link>
                        </div>
                    </Layout>
                </div>

            </Router>
        </div>
    )
}

export default Header
