import SearchUserPreview from 'components/SearchResults/SearchUserPreview';
import React from 'react';
import { Wrapper } from './SearchResultsPage.styles';

const SearchResultsPage: React.FC = () => {
  return (
    <Wrapper>
      <SearchUserPreview />
      <SearchUserPreview />
      <SearchUserPreview />
    </Wrapper>
  );
};

export default SearchResultsPage;
