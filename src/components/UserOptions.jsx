import React from 'react';
import DeletePatchOptions from './DeletePatchOptions';
import FunnyOptions from './FunnyOptions';
  

const UserOptions = (props) => {
    const { username, author, comment_id, deleteComment } = props;

    if (username === author) {
        return <DeletePatchOptions deleteComment={deleteComment} comment_id={comment_id} /> 
    }
    return <FunnyOptions comment_id={comment_id} />
};

export default UserOptions;