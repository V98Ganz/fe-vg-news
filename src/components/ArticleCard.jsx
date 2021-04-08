import React from "react";

const ArticleCard = ({
  title,
  author,
  comment_count,
  created_at,
  topic,
}) => {
  return (
    <div className="article-card-inner">
      <div className="article-card-top-info">
        <p>
          <b>{topic}</b> | posted by <em>{author}</em> at {created_at}
        </p>
      </div>
      <h3 className="card-text">{title}</h3>
      <div className="article-card-lower-info">
        <p>{comment_count} comments</p>
      </div>
    </div>
  );
};

export default ArticleCard;
