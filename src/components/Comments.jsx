import UserOptions from "./UserOptions";
import Votes from "./Votes";

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
              <UserOptions
                deleteComment={props.deleteComment}
                comment_id={comment.comment_id}
                username={props.username}
                author={comment.author}
              />
              <p>{comment.body}</p>
              <p>{comment.created_at}</p>
              <Votes id={comment.comment_id} paraPoint={"comments"} votes={comment.votes} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
