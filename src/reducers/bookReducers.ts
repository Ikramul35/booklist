import { v1 as uuid } from 'uuid';
import { bookType } from '../interface/interface';

export const bookReducers = (
    state: bookType[],
    action: {
        type: string;
        data: { title: string; author: string; id: string };
    }
) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                {
                    title: action.data.title,
                    author: action.data.author,
                    id: uuid(),
                },
                ...state,
            ];
        case 'REMOVE_BOOK':
            return state.filter((book) => book.id !== action.data.id);
        default:
            return state;
    }
};
