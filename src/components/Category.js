import React from 'react';
import Book_div from './Book_div'

function Category (props) {
    const data = props.data_category.books;
    const book_div = data.map(el => {
        return (
            <Book_div key={el.primary_isbn13} data_book={el}></Book_div>
        );
    });


  return (
    <div className="category">
        <div className="header_category">
            <div>{props.list_name}</div>
            <img src={props.data_category.list_image} alt=""/>        
        </div>
        
        {book_div}

    </div>
  );
}

export default Category;