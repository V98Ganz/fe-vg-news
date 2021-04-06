import React, { Component } from 'react';
import * as api from '../utils/api';
import { Link } from "@reach/router";

class Articles extends Component {
    state = {
        articles: [],
        isLoading: true,
    };

    getArticles = () => {
        api.fetchArticles().then((articles) => {
            this.setState({articles, isLoading: false})
        });
    };

    componentDidMount() {
        const { articles } = this.props;
        this.getArticles(articles)
    }

    render() {
        console.log(this.state)
        return (
            <div className="articles-grid" >
                {this.state.articles.map((article) => {
                    return (
                        <div
                        key={article.title}
                        >
                        <Link
                        to={`/articles/${article.article_id}`}
                        style={{ textDecoration: 'none', display: 'block', }}
                        >
                        <div 
                        className="article-card"
                        >                            
                            <h3 className="card-text" >{article.title}</h3>
                        </div>
                        </Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Articles;