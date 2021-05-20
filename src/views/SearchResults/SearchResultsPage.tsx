import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchUserPreview from 'components/SearchResults/SearchUserPreview';
import { Wrapper } from './SearchResultsPage.styles';
import { SearchResultsUser } from 'types/user-types';

interface ParamsProps {
  uname: string;
}

const SearchResultsPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResultsUser[]>([]);
  const { uname } = useParams<ParamsProps>();

  useEffect(() => {
    const reqData = async () => {
      try {
        const responseData = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/searchUsers`,
          {
            searchValue: uname,
          }
        );
        setSearchResults(responseData.data.users);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    reqData();
  }, [uname]);

  return (
    <Wrapper>
      {searchResults.map((user) => (
        <SearchUserPreview user={user} />
      ))}
    </Wrapper>
  );
};

export default SearchResultsPage;
