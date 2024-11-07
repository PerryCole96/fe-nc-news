import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getCommentsByArticleId } from "../utils/api";
import CommentAdder from "./CommentAdder";


export default function CommentList({ article_id }) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)

        getCommentsByArticleId(article_id)
            .then((data) => {
                setComments(data.comments)
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false))
    }, [article_id]);

    function handleNewCommentAdded() {
      
      setIsLoading(true);
      getCommentsByArticleId(article_id)
          .then((data) => {
              setComments(data.comments);
          })
          .catch(() => setIsError(true))
          .finally(() => setIsLoading(false));
  }

  if (isLoading) return <h3>Loading Comments...</h3>
    if (isError) return <h3>Something went wrong, please refresh the page</h3>

    return (
        <div className="comment-section">
          <h3 className="comment-heading">Comments</h3>
          <CommentAdder article_id={article_id} handleNewCommentAdded={handleNewCommentAdded} />
            {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />
            })}
        </div>
    )
}