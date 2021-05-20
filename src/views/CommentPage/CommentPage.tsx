import React, { useEffect, useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Post from 'components/Post/Post';
import Loader from 'shared/components/Loader';
import AuthContext from 'shared/context/auth-context';
import { PostsContext } from 'shared/context/postsProvider';
import {
  Wrapper,
  CommentsWrapper,
  Comment,
  AddComment,
  AuthorInfo,
  ProfilePicture,
  CommentAuthor,
  CommentDate,
} from './CommentPage.styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

interface ParamsProps {
  postId: string;
}

interface PostCommentsType {
  _id: string;
  commentAuthorId: string;
  commentAuthorName: string;
  commentAuthorImage: string;
  content: string;
  commentDate: string;
}

const CommentPage: React.FC = () => {
  const [postComments, setPostComments] = useState<PostCommentsType[]>([]);
  const [newCommentValue, setNewCommentValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { postId } = useParams<ParamsProps>();
  const { posts, handleCommentAction } = useContext(PostsContext);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const reqData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/posts/comments/${postId}`
        );
        setIsLoading(false);
        setPostComments(response.data.comments);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    reqData();
  }, [postId]);

  const handleAddCommentValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewCommentValue(event.target.value);

  const handleSubmitComment = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (newCommentValue.length < 1 || newCommentValue.length > 500) return;
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/posts/comment`,
        { postId, content: newCommentValue },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setNewCommentValue('');
      setPostComments([...postComments, data.comment]);
      handleCommentAction(postId, 'COMMENT');
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/posts/comment/${postId}/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const newComments = postComments.filter(
        (comment) => comment._id !== commentId
      );
      setPostComments(newComments);
      handleCommentAction(postId, 'DELETE_COMMENT');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      {posts.map((post) => {
        if (post._id !== postId) return null;
        const isPostLikedByLoggedUser = post.likedBy.find(
          (userId) => userId === auth.userData![0]
        );
        return (
          <Post
            post={post}
            isCreatorShown={true}
            isPostLikedByUser={!!isPostLikedByLoggedUser}
          />
        );
      })}
      <CommentsWrapper commentsExist={postComments.length > 0}>
        {!isLoading &&
          postComments.map((comment, i) => (
            <Comment
              key={comment._id}
              isLastComment={i === postComments.length - 1}
            >
              <Link to={`/profile/${comment.commentAuthorName}`}>
                <AuthorInfo>
                  <ProfilePicture
                    src={`${process.env.REACT_APP_ASSETS_URL}/${comment.commentAuthorImage}`}
                  />
                  <CommentAuthor>{comment.commentAuthorName}</CommentAuthor>
                </AuthorInfo>
              </Link>
              <p>{comment.content}</p>
              <CommentDate>{comment.commentDate}</CommentDate>
              {comment.commentAuthorId === auth.userData![0] && (
                <DeleteIcon onClick={() => handleDeleteComment(comment._id)} />
              )}
            </Comment>
          ))}
        <AddComment onSubmit={handleSubmitComment}>
          <input
            placeholder="Add Comment"
            value={newCommentValue}
            onChange={handleAddCommentValue}
          />
          <button>
            <AddCircleIcon />
          </button>
        </AddComment>
      </CommentsWrapper>
      {isLoading && <Loader />}
    </Wrapper>
  );
};

export default CommentPage;
