import axios from "axios"

const BASE_URL = "https://perry-be-nc-news.onrender.com/api"

const api = axios.create({baseURL: BASE_URL})

export default api;

export function getArticles({ sort_by = "created_at", order = "desc" } = {}) {
    return api
    .get(`/articles?sort_by=${sort_by}&order=${order}`)
    .then((res) => res.data);
}


export function getArticleById(article_id){
    return api
    .get(`/articles/${article_id}`)
    .then((res) => res.data);
};

export function getCommentsByArticleId(article_id){
    return api
    .get(`/articles/${article_id}/comments`)
    .then((res) => res.data);
};

export function patchLike({article_id, inc_votes}){
    return api
    .patch(`/articles/${article_id}`,{inc_votes})
    .then((res) => res.data);
};

export function postComment({article_id, body, username}){
    return api
    .post(`/articles/${article_id}/comments`, { username, body })  
    .then((res) => {
        console.log('Posted', res.data)  
        return res.data;  
    })
};

export function deleteComment({comment_id}){
    return api
    .delete(`/comments/${comment_id}`)
    .then((res) =>{
        console.log('Deleted', res.data)
        return res.data
    })
};

export function getArticlesByTopic({ topic, sort_by = "created_at", order = "desc" } = {}) {
    
    const query = topic ? `?topic=${topic}&sort_by=${sort_by}&order=${order}` : `?sort_by=${sort_by}&order=${order}`
    
    return api
    .get(`/articles${query}`)
    .then((res) => res.data)
};