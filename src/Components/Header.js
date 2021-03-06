import Layout from './Layout'
import { Nav, Navbar, NavbarBrand, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <Navbar className='list-books-title' bg='primary' variant='dark'>
                <Layout>

                    <NavbarBrand><h1>Reads Tracker</h1></NavbarBrand>
                    <Nav className='justify-content-end'>
                        <Link to='/search'>
                            <Button className='m-2' variant='light'>
                                Add Books
                            </Button>
                        </Link>
                    </Nav>

                </Layout>
            </Navbar>
        </div>
    )
}

export default Header
