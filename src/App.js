
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import SearchPage from './Components/SearchPage'
import Home from './Components/Home'

const App = () => {

  return (
    <Router>

      <Route path='/' exact component={Home} />

      <Route path='/searchpage' component={SearchPage} />

    </Router>
  )
}

export default App