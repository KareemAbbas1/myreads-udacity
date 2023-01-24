
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css'
import SearchPage from './Components/SearchPage'
import Home from './Components/Home'

const App = () => {

  return (
    <Router>
      <div className='app'>

        <Route path='/' exact component={Home} />

        <Route path='/search' component={SearchPage} />
      </div>
    </Router>
  )
}

export default App