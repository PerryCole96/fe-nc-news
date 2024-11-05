import { useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import { getCommentsByArticleId } from "../utils/api";

export default function CommentList({article_id}){
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
    
        setIsLoading(true)
        setIsError(false)
       
        getCommentsByArticleId(article_id)
        .then((data) => {
          setComments(data.comments)
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false))
     }, [article_id])
    
     if (isLoading) return <div>Loading...</div>;
     if (isError) return <div>Something went wrong, please refresh the page</div>;


    return(
      <div className="comment-section">
        {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
      </div>
    )
}