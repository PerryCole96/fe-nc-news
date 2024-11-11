import { useState, useContext } from "react";
import { deleteComment } from "../utils/api";
import UserContext from "../context/UserContext";

export default function CommentDeleter({comment, comment_id, handleDeletedComment }) {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const { isLoggedIn, userContext} = useContext(UserContext)
    const {username} = userContext

    if(!isLoggedIn){
        return null
    }

    if(username !== comment.author){
        return null
    }
    function handleDelete() {

        setIsLoading(true);
        setIsError(false)

        deleteComment({comment_id })
            .then(() => {
                    handleDeletedComment(comment_id)
            })
            .catch(() => {
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    if (isError) return <p>Could not delete. Refresh and try again.</p>;
    if (isLoading) return <p>Deleting...</p>

    return (
        <button onClick={handleDelete} disabled={isLoading} className="delete-button">
            Delete Comment
        </button>
    )
}
