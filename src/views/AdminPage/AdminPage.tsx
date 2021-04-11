import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from 'shared/context/auth-context';
import { Wrapper, Heading } from './AdminPage.styles';
import { PostType } from 'types/posts-types';

const AdminPage: React.FC = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const reqData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/reportedPosts`, {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            })
            console.log(response);
        } catch (err) {
            console.log(err);
        }    
        };
        reqData();
    }, []);

    return (
        <Wrapper>
            <Heading>Reported Posts</Heading>
        </Wrapper>
    )
}

export default AdminPage
