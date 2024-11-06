import dateConverter from "../utils/dateConverter";

export default function CommentCard({ comment }) {

    const { comment_id, votes, created_at, author, body } = comment;
    
    return (
        <div className="comment-list-item">
            <div className="comment-left-column">
                <p className="comment-username">{author}</p>
                
        <p className="comment-body">{body}</p>
            </div>
            <div className="comment-right-column">
                <p className="comment-time">Posted: {dateConverter(created_at)}</p> {}
                <p className="comment-votes">Comment Votes: {votes}</p>
            </div>
        </div>
    );
}