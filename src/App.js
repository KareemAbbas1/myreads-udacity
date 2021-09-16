
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import SearchPage from './Components/SearchPage'

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/' exact render={(props) => (
          <>
            <h1>Hello World!</h1>
          </>
        )} />

        <Route path='/searchpage' component={SearchPage} />

        <div className="open-search">
          <button>Add a book</button>
        </div>
      </Router>
    </div>
  )
}

export default App
