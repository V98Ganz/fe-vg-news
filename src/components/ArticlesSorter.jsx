import React from 'react';

const ArticlesSorter = (props) => {
    return (
        <div className="sorter-top-bar" >
            <button className="sorter-top-bar-button" name='created_at' onClick={props.articleSorter} >Most Recent</button>
            <button className="sorter-top-bar-button" name='votes' onClick={props.articleSorter} >Most liked</button>
            <button className="sorter-top-bar-button" name='comment_count' onClick={props.articleSorter} >Most Commented</button>
        </div>
    );
};

export default ArticlesSorter;