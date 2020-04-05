import React from 'react';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';
import ShelfChanger from './ShelfChanger';

class SearchLibrary extends React.Component
{
    state={
        query:'',
        queryResult: []
    }
    searchTerms=['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
    
    handleSearch=(e)=>{
        this.setState({query: e.target.value})     
        const queryFilter=this.searchTerms.filter(term=>term.toLowerCase().includes(this.state.query.trim()))
        if(this.state.query.length>0 && queryFilter.length!==0)
        {
            BooksAPI.search(this.state.query.trim())
                .then(
                    (response)=>this.setState({queryResult: response}),
                    // console.log(this.props.books)
                    // (response)=>console.log(response),
                    (err)=>console.log(err)
                )
                .then(()=>console.log(this.state.queryResult.length))
        }
    }
    render()
    {
        // let filteredBooks=[]
        // // this.state.queryResult!==undefined ? filteredBooks=()=>this.state.queryResult.filter(book=> !this.props.books.includes(book)):''
        // if(this.state.queryResult.length!==undefined || this.state.queryResult.length!==0)
        // {
        //     filteredBooks=this.state.queryResult.filter(book=> !this.props.books.includes(book))
        // }
        
        // console.log(filteredBooks)
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
                    <Link
                        to='/'
                        className="close-search"
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={this.handleSearch}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.queryResult.length!==undefined ? (this.state.queryResult.map((book)=>(
                            
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail: ''})` }}></div>
                                        {!book.hasOwnProperty('shelf') ? book.shelf='none' : ''
                                            // Object.assign(book, {shelf: 'none'})
                                        }
                                        {/* {console.log(book)} */}
                                        <ShelfChanger book={book} currentShelf={book.shelf}/>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        ))) : (
                            <h2>No result found</h2>
                        )}
                    </ol>
                </div>
          </div>
        )
    }
}

export default SearchLibrary;


{/*
NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.
*/}