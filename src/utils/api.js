import axios from 'axios';

const request = axios.create({
    baseURL: 'https://vg-nc-news.herokuapp.com/api'
});

export const fetchArticles = async (queries) => {
    if (queries) {
        const { topic } = queries
        const { data } = await request.get(`/articles?topic=${topic}`);
        return data.articles;
    } else {
        const { data } = await request.get('/articles');
        return data.articles;
    }
};

export const fetchTopics = async () => {
    const { data } = await request.get('/topics');
    return data.topics;
}

export const fetchUser = async (userName) => {
    const { data } = await request.get(`/users/${userName}`);
    return data.user;
}

export const fetchArticle = async (id) => {
    const { data } = await request.get(`/articles/${id}`);
    return data.article;
}

export const fetchComments = async (id) => {
    const { data } = await request.get(`/articles/${id}/comments`);
    return data.comments;
}

export const postComment = async (id, username, body) => {
    const { data } = await request.post(`/articles/${id}/comments`, {username, body});
    return data.comment
}