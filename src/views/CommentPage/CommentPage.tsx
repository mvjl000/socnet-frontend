import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useScreenInfo } from 'hooks/useScreenInfo';
import Post from 'components/Post/Post';
import AuthContext from 'shared/context/auth-context';
import { PostType } from 'types/posts-types';
import { Wrapper, CommentsWrapper, Comment, AddCommentButton, AuthorInfo, ProfilePicture, CommentAuthor } from './CommentPage.styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const DUMMY_POSTS: { content: string }[] = [
];

interface ParamsProps {
    postId: string;
};

interface PostCommentsType {
    _id: string;
    commentAuthorId: string;
    commentAuthorName: string;
    commentAuthorImage: string;
    content: string;
    commentDate: string;
}

const CommentPage: React.FC = () => {
    const [postData, setPostData] = useState<PostType>();
    const [postComments, setPostComments] = useState<PostCommentsType[]>([]);
    const { postId } = useParams<ParamsProps>();
    const auth = useContext(AuthContext);
    const { isDesktopMode } = useScreenInfo();

    useEffect(() => {
    const reqData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/posts/post/${postId}`
        )
        setPostData(response.data.post);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    reqData();
  }, [postId]);

  useEffect(() => {
    const reqData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/posts/comments/${postId}`
        )
        setPostComments(response.data.comments);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    reqData();
  }, [postId]);

  const isPostLikedByLoggedUser = postData && postData.likedBy.find(userId => userId === auth.userData![0]);

    return (
        <Wrapper>
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
                isPostLikedByUser={!!isPostLikedByLoggedUser}
                commentsCount={postData?.commentsCount}
                />
            }
            <CommentsWrapper commentsExist={postComments.length > 0}>
                {postComments.map((comment, i) => (
                    <Comment key={comment._id} isLastComment={i === postComments.length - 1}>
                      <AuthorInfo>
                        <ProfilePicture src={`${process.env.REACT_APP_ASSETS_URL}/${comment.commentAuthorImage}`}/>
                        <CommentAuthor>{comment.commentAuthorName}</CommentAuthor>
                      </AuthorInfo>
                    <p>{comment.content}</p>
                    </Comment>
                ))}
                <AddCommentButton>
                    <AddCircleIcon /> {isDesktopMode && 'Add Comment'}
                </AddCommentButton>
            </CommentsWrapper>
        </Wrapper>
    )
}

export default CommentPage
