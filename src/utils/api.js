import axios from 'axios';

const request = axios.create({
    baseURL: 'https://vg-nc-news.herokuapp.com/api'
});

export const fetchArticles = async () => {
    const { data } = await request.get('/articles');
    return data.articles;
};