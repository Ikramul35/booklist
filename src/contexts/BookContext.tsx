import React, {
    createContext,
    ReactElement,
    useEffect,
    useReducer,
} from 'react';
import { booksContextData } from '../interface/interface';
import { bookReducers } from '../reducers/bookReducers';

export const BookContext = createContext<booksContextData>({
    books: [],
    dispatch: () => null,
});

const BookContextProvider = (props: propTypes) => {
    const [books, dispatch] = useReducer(bookReducers, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
};

interface propTypes {
    children: ReactElement[];
}

export default BookContextProvider;
