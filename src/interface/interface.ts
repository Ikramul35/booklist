export interface bookType {
    title: string;
    author: string;
    id: string;
}

export interface booksContextData {
    books: bookType[];
    dispatch: React.Dispatch<{ type: string; data: bookType }>;
}
