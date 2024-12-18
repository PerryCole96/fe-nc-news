import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import LikeArticleButton from "./LikeArticleButton";
import { Link } from "react-router-dom";


export default function SingleArticleGenerator(){
   const [singleArticle, setSingleArticle] = useState(null)
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [votes, setVotes] =useState(false)
   const { article_id} = useParams()
   
 

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

    if (isLoading){ return <h3>Loading article...</h3>}
    if (isError){ return <p>Something went wrong, please refresh the page</p>}
    if (!singleArticle){ return <p>No Article Found</p>}

    const { article_img_url, title, author, topic, comment_count, body } = singleArticle;

  return (
    <div className="single-article">

  <div className="single-left-column">
    <img className="single-article-image" src={article_img_url} alt={`Image related to the article titled ${title}`} />
    <h3 className="single-article-title">{title}</h3>
    <Link to={`/topics/${topic}`} className="article-topic">{topic}</Link>
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