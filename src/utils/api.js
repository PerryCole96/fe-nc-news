import axios from "axios"

const BASE_URL = "https://perry-be-nc-news.onrender.com/api"

const api = axios.create({baseURL: BASE_URL})

export default api;

export function getArticles(){
return api
.get("/articles")
.then((res) => res.data)
}

export function getArticleById(article_id){
    return api
    .get(`/articles/${article_id}`)
    .then((res) => res.data)
}

export function getCommentsByArticleId(article_id){
    return api
    .get(`/articles/${article_id}/comments`)
    .then((res) => res.data)
}

export function patchLike({article_id, inc_votes}){
    return api
    .patch(`/articles/${article_id}`,{inc_votes})
    .then((res) => res.data)
}