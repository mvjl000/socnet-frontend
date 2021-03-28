import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from './SearchBar.styles';

interface SearchBarProps {
  closeDropDown?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ closeDropDown }) => {
    const [barValue, setBarValue] = useState('');

    const history = useHistory();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setBarValue(event.target.value);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        history.push(`/profile/${barValue}`);
        setBarValue('');
        if (closeDropDown) {
            closeDropDown();
        }
    };

    return (
        <form onSubmit={handleSearch}>
        <Input placeholder='Search for person' value={barValue} onChange={handleInputChange}/>
        </form>
    )
}

export default SearchBar
