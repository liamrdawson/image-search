import React, {useState, createContext} from 'react';

export const SearchContext = createContext();

export const SearchProvider = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <SearchContext.Provider value={[searchTerm, setSearchTerm]}>
            {props.children}
        </SearchContext.Provider>
    )
}