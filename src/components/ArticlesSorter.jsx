import React from 'react';

const ArticlesSorter = (props) => {
    return (
        <div>
            <button name='created_at' onClick={props.articleSorter} >Most Recent</button>
            <button name='votes' onClick={props.articleSorter} >Most liked</button>
            <button name='comment_count' onClick={props.articleSorter} >Most Commented</button>
        </div>
    );
};

export default ArticlesSorter;