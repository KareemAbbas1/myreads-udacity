
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import SearchPage from './Components/SearchPage'
import Home from './Components/Home'
import { Button } from 'react-bootstrap'


const App = () => {
  return (
    <Router>
      <Route path='/' exact render={(props) => (

        <Home />

      )} />


      <Route path='/searchpage' component={SearchPage} />
      <div className="open-search">
        <Link to='/searchpage'><Button>Add Books</Button></Link>
      </div>
    </Router>
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




//   <Router>
//   <>
//     <Home />

//   </>
// </Router>








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


/* <Router>
        <Route path='/' exact render={(props) => (
          <>
            <Home />
          </>
        )} />


        <Route path='/searchpage' component={SearchPage} />

        <div className="open-search">
          <Link to='/searchpage'><Button>Add a book</Button></Link>
        </div>


      </Router> */