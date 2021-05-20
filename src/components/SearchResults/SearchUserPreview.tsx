import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, ProfilePhoto } from './SearchResults.styles';
import { SearchResultsUser } from 'types/user-types';

interface SearchUserPreviewProps {
  user: SearchResultsUser;
}

const SearchUserPreview: React.FC<SearchUserPreviewProps> = ({ user }) => {
  return (
    <Link to={`/profile/${user.username}`}>
      <Wrapper>
        <ProfilePhoto
          src={`${process.env.REACT_APP_ASSETS_URL}/${user.userImage}`}
        />
        <p>{user.username}</p>
      </Wrapper>
    </Link>
  );
};

export default SearchUserPreview;
