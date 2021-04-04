import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Input } from './SearchBar.styles';

interface SearchBarProps {
  closeDropDown?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ closeDropDown }) => {
    const [barValue, setBarValue] = useState('');
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const history = useHistory();

    useEffect(() => {
        if (barValue) {
            const reqData = async () => {
                try {
                    const responseData = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/searchUsers`, {
                        searchValue: barValue
                    });
                    setSearchResults(responseData.data.users);
                } catch (err) {
                    console.log(err.response.data.message);
                };
            };
            reqData();
        } else {
            setSearchResults([]);
        }
    }, [barValue]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBarValue(event.target.value);
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        history.push(`/profile/${barValue}`);
        setBarValue('');
        if (closeDropDown) {
            closeDropDown();
        }
    };

    return (
        <>
        <form onSubmit={handleSearch}>
        <Input placeholder='Search for person' value={barValue} onChange={handleInputChange}/>
        </form>
        {searchResults && (
            <ul>
                {searchResults.map(username => <li key={username}>{username}</li>)}
            </ul>
        )}
        </>
    )
}

export default SearchBar
