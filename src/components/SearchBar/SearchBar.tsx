import React, { useState } from 'react';
import { Input } from './SearchBar.styles';

const SearchBar: React.FC = () => {
    const [barValue, setBarValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setBarValue(event.target.value);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(barValue);
    };

    return (
        <form onSubmit={handleSearch}>
        <Input placeholder='Search for person' value={barValue} onChange={handleInputChange}/>
        </form>
    )
}

export default SearchBar
