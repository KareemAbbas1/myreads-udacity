import { Link } from 'react-router-dom'
import '../App.css'
import Layout from './Layout'


const SearchPage = () => {
  return (
    <Layout>
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/'><button className="close-search"></button></Link>
            <div className="search-books-input-wrapper">

              <input type="text" placeholder="Search by title or author" />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SearchPage

// onClick={() => this.setState({ showSearchPage: false })}
