import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { bookType } from '../interface/interface';

interface propsType {
    book: bookType;
}

const BookDetails = ({ book }: propsType) => {
    const { dispatch } = useContext(BookContext);
    return (
        <li
            onClick={() =>
                dispatch({
                    type: 'REMOVE_BOOK',
                    data: {
                        title: '',
                        author: '',
                        id: book.id,
                    },
                })
            }
        >
            <div className="title"> {book.title} </div>
            <div className="author"> {book.author} </div>
        </li>
    );
};

export default BookDetails;
