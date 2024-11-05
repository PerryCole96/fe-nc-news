export default function ArticleCard({article}) {
  if(!article){
    return <div>No Article Data!</div>
  }
  const {article_id, title, topic, comment_count, author, article_img_url} = article;

  return (
    <div className="article-list-item">
      <img className="article-image" src={article_img_url} alt="an image related to the articles title" />
      <h3 className="article-title">{title}</h3>
      <p className="username">{author}</p>
      <p className="topic">{topic}</p>
      <p className="interaction-total">{comment_count}</p>
    </div>
  )
}
