import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import LikeArticleButton from "./LikeArticleButton";


export default function SingleArticleGenerator(){
   const [singleArticle, setSingleArticle] = useState(null)
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [votes, setVotes] =useState(false)
   const { article_id } = useParams()
 

   useEffect(() => {
    setIsLoading(true)
    setIsError(false)

    getArticleById(article_id)
    .then((article) => {
        setSingleArticle(article)
        setVotes(article.votes)
    })
    .catch(() => setIsError(true))
    .finally(() => setIsLoading(false))
   }, [article_id])

   function updateVotes(newVotes){
    setVotes(newVotes)
    
   }

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Something went wrong, please refresh the page</div>;


    if(!singleArticle){
        return <div>No Article Found</div>
    }

    const { article_img_url, title, author, topic, comment_count, body } = singleArticle;

  return (
    <div className="single-article">
  <div className="single-left-column">
    <img className="single-article-image" src={article_img_url} alt={`Image related to the article titled ${title}`} />
    <h3 className="single-article-title">{title}</h3>
    <div className="single-topic">{topic}</div>
    <div className="single-article-body">{body}</div>
    
  </div>
  <div className="single-right-column">
    <div className="single-auth-username">{author}</div>
    <p className="single-interaction-total">Comments {comment_count}</p>
    <div className="single-votes">Likes {votes}</div>
    <LikeArticleButton article_id={article_id} votes={votes} updateVotes={updateVotes} />
    
  </div>
</div>
  )
}