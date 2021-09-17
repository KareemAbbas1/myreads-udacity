import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Layout from './Layout'
import SearchPage from './SearchPage'




const Header = () => {
    return (
        <div>
            <Router>

                <header className='list-books-title'>
                    <Layout>
                        <div className='d-flex justify-content-between'>
                            <h1>Hello World</h1>
                            <Route path='/searchpage' component={SearchPage} />
                            <Link to='/searchpage'><Button className='m-2' variant='light'>Add Books</Button></Link>
                        </div>
                    </Layout>
                </header>

            </Router>
        </div>
    )
}

export default Header
