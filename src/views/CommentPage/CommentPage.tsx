import React from 'react';
import { useParams } from 'react-router-dom';

interface ParamsProps {
    postId: string;
}

const CommentPage: React.FC = () => {
    const { postId } = useParams<ParamsProps>();

    return (
        <h1>
            Comment post with id {postId}
        </h1>
    )
}

export default CommentPage
