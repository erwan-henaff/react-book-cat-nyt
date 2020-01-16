import React from 'react';

function Book_div (props) {
    return (
        <div className="book_div">
            <div className="div_image"><img src={props.data_book.book_image} alt="111"/></div>
            <div className="book_info">
                <div className="book_title">{props.data_book.title}</div>
                <div>{props.data_book.author}</div>
                <div>{props.data_book.description}</div>
            </div>
        </div>
    );
}

export default Book_div;