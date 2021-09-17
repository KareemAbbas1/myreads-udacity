
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css'
// import Home from './Components/Home'
// import SearchPage from './Components/SearchPage'
// import { Button } from 'react-bootstrap'
// import Layout from './Components/Layout'
// import { useLocation } from 'react-router'
import Header from './Components/Header'

const App = () => {
  return (
    <>
     <Header />
    </>
  )
}

export default App


  // <Layout>
  //   <Router>
  //     <div className='d-flex justify-content-between'>

  //     <Route path='/' exact component={Home} />

  //     <Route path='/searchpage' component={SearchPage} />
  //     <Link to='/searchpage'><Button className='m-2' variant='light'>Add Books</Button></Link>

  //     </div>
  //   </Router>
  // </Layout>













  // render={(props) => (<Home />)

  // <Button variant = 'primary' >
  //       <div className="open-search">
  //          <Link to='/searchpage'><Button variant='primary'>Add Books</Button></Link>
  //       </div>
  // </Button >

  // < Button variant = 'primary' >
  //   <Router>
  //    <Route path='/searchpage' component={SearchPage} />
  //       <div className="open-search">
  //          <Link to='/searchpage'><Button variant='primary'>Add Books</Button></Link>
  //       </div>
  //   </Router>
  // </Button >
