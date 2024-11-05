import dateConverter from "../utils/dateConverter";

export default function CommentCard({ comment }) {
    if (!comment) {
        return <div>Ain't no comments here my dude, now go on, get!!</div>
    }
    const { comment_id, votes, created_at, author, body } = comment;
    
    return (
        <div className="comment-list-item">
            <div className="comment-left-column">
                <p className="comment-username">{author}</p>
                
        <p className="comment-body">{body}</p>
            </div>
            <div className="comment-right-column">
                <p className="comment-time">{dateConverter(created_at)}</p> {}
                <p className="comment-votes">{votes}</p>
            </div>
        </div>
    );
}