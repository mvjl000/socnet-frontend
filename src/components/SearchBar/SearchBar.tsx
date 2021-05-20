import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Input, ResultsContainer, Wrapper, ListItem } from './SearchBar.styles';
import { SearchResultsUser } from 'types/user-types';

interface SearchBarProps {
  closeDropDown?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ closeDropDown }) => {
  const [barValue, setBarValue] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultsUser[]>([]);
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const history = useHistory();

  useEffect(() => {
    if (barValue) {
      const reqData = async () => {
        try {
          const responseData = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/user/searchUsers`,
            {
              searchValue: barValue,
            }
          );
          setSearchResults(responseData.data.users);
        } catch (err) {
          console.log(err.response.data.message);
        }
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
    history.push(`/search-results/${barValue}`);
    setBarValue('');
    if (closeDropDown) {
      closeDropDown();
    }
  };

  const handleUserClick = () => {
    if (closeDropDown) {
      closeDropDown();
    }
    setBarValue('');
    setSearchResults([]);
  };

  useEffect(() => {
    const isInputFocused = () => {
      setIsSearchBarFocused(document.activeElement === inputRef.current);
    };

    window.addEventListener('click', isInputFocused);

    return () => {
      window.removeEventListener('click', isInputFocused);
    };
  }, []);

  return (
    <Wrapper>
      <form onSubmit={handleSearch}>
        <Input
          placeholder="Search for person"
          value={barValue}
          onChange={handleInputChange}
          isListActive={searchResults.length > 0}
          ref={inputRef}
        />
      </form>
      {searchResults.length > 0 && isSearchBarFocused && (
        <ResultsContainer isListActive={searchResults.length > 0}>
          {searchResults.map(({ username }, i) => {
            if (i === 8) {
              return (
                <ListItem
                  key={username}
                  to={`/search-results/${barValue}`}
                  onClick={handleUserClick}
                  isLastItem={true}
                >
                  See more results
                </ListItem>
              );
            }
            if (i > 7) return null;
            return (
              <ListItem
                key={username}
                to={`/profile/${username}`}
                onClick={handleUserClick}
              >
                {username}
              </ListItem>
            );
          })}
        </ResultsContainer>
      )}
    </Wrapper>
  );
};

export default SearchBar;
