const Comments = (props) => {
  return (
    <div className="comment-article-container">
      <h3>Comments</h3>
      <ul className="comment-article-list">
        {props.comments.map((comment) => {
          return (
            <li
              className="comment-article-list-item"
              id={comment.comment_id}
              key={comment.comment_id}
            >
              <p>{comment.author}</p>
              <p>{comment.body}</p>
              <p>{comment.created_at}</p>
              <p>{comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
