import { useState, useContext } from "react";
import { postComment } from "../utils/api";
import UserContext from "../context/UserContext";

export default function CommentAdder({ article_id, handleNewCommentAdded }) {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [commentBody, setCommentBody] = useState('')
    const [disabledSubmit, setDisabledSubmit] = useState(false);
    const { userContext } = useContext(UserContext);
    const {isLoggedIn} = useContext(UserContext)

    if(!isLoggedIn){
            return
        }
   
    const username = userContext.username

    function handleNewComment(e) {

        e.preventDefault();
     
        if (!commentBody.match(/\S/)) {
            alert("Comment must contain at least one alphabetical character before submission.")
            return
        }

        setIsLoading(true);
        setIsError(false);
        setDisabledSubmit(true);

        const newCommentData = { article_id, body: commentBody, username };

        postComment(newCommentData)
            .then((newComment) => {
                setCommentBody('');
                if (handleNewCommentAdded) {
                    handleNewCommentAdded(newComment);
                }
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
                setDisabledSubmit(false);
            });
    }

    if (isError) return <p>Could not post comment. Refresh and try again</p>
    if (isLoading) return <p>Posting... Hold tight!</p>
    
   
    return (
        <div className="comment-adder">
            <h3>Have your say!</h3>
            <form className="comment-form" onSubmit={handleNewComment}>
                <textarea
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                    placeholder="Comment..."
                    required
                />
                <button type="submit" disabled={disabledSubmit || isLoading}>
                    Submit
                </button>
            </form>
        </div>
    );
}