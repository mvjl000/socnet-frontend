import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from './SearchBar.styles';

const SearchBar: React.FC = () => {
    const [barValue, setBarValue] = useState('');

    const history = useHistory();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setBarValue(event.target.value);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        history.push(`/profile/${barValue}`);
        setBarValue('');
    };

    return (
        <form onSubmit={handleSearch}>
        <Input placeholder='Search for person' value={barValue} onChange={handleInputChange}/>
        </form>
    )
}

export default SearchBar
