import React from 'react';
import { Wrapper, Header, PhotosWrapper, ProfilePhoto } from './Login.styles';

const PickImage: React.FC = () => {
    return (
        <Wrapper>
            <Header>Pick profile picture</Header>
                <PhotosWrapper>
                <ProfilePhoto/>
                <ProfilePhoto/>
                <ProfilePhoto/>
                <ProfilePhoto/>
                <ProfilePhoto/>
            </PhotosWrapper>
        </Wrapper>
    )
}

export default PickImage
