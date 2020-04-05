import React from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class ShelfChanger extends React.Component
{
    // updateShelf=(book, shelf)=>
    // {
    //     this.props.onShelfUpdate(book, shelf)
    // }

    render()
    {
        return(
            <div className="book-shelf-changer">
                <select onChange={e=> this.props.onShelfUpdate(this.props.book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option> 
                    <option value="read">Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger;

// onClick={()=>this.updateShelf(this.props.book, 'wantToRead')}
// onClick={()=>this.updateShelf(this.props.book, 'read')}
// active={this.state.currentShelf==='currentlyReading'}
// active={this.state.currentShelf==='wantToRead'}
// active={this.state.currentShelf==='read'}
// active={this.state.currentShelf==='none'}
