import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Post from 'components/Post/Post';
import AuthContext from 'shared/context/auth-context';
import { PostType } from 'types/posts-types';

interface ParamsProps {
    postId: string;
}

const CommentPage: React.FC = () => {
    const [postData, setPostData] = useState<PostType>();
    const { postId } = useParams<ParamsProps>();
    const auth = useContext(AuthContext);

    useEffect(() => {
    const reqData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/posts/post/${postId}`
        );
        console.log(response.data.post);
        setPostData(response.data.post);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    reqData();
  }, []);

  const isPostLikedByLoggedUser = postData && postData.likedBy.find(userId => userId === auth.userData![0])

    return (
        <>
            {postData && <Post title={postData.title}
                content={postData.content}
                creator={postData.creatorName}
                creatorImage={postData.creatorImage}
                isCreatorShown={false}
                postId={postData._id}
                creationDate={postData.creationDate}
                creatorId={postData.creatorId}
                edited={postData.edited}
                likesCount={postData.likesCount}
                isPostLikedByUser={!!isPostLikedByLoggedUser}/>
            }
        </>
    )
}

export default CommentPage
