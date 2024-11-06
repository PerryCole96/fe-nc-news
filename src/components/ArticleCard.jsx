import { Link } from "react-router-dom";

export default function ArticleCard({article}) {
  const {article_id, title, topic, comment_count, author, article_img_url, votes} = article;

  return (
    <div className="article-list-item"> 
    <div className="article-left-column">
    <Link to={`/articles/${article_id}`}>
      <img className="article-image" src={article_img_url} alt={`an image related to the article titled ${title}`} />
      <h3 className="article-title">{title}</h3>
      </Link>
      <p className="article-topic">{topic}</p>
      </div>
      <div className="article-right-column">
      <p className="auth-username">{author}</p>
      <p className="article-interaction-total">Comments {comment_count}</p>
      <p className="article-votes">Votes {votes}</p>
      </div>
   </div>
  )
}
