import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import TopicsSection from "./TopicsSection";
import ArticleSorter from "./ArticleSorter";

export default function TopicList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");  

  useEffect(() => {
    setIsLoading(true)

    
    getArticlesByTopic({ topic, sort_by: sortBy, order })
      .then((data) => {
        setArticles(data.articles)
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }, [topic, sortBy, order])

  if (isLoading) return <h3>Loading Articles...</h3>;
  if (isError) return <h3>Something went wrong, please refresh the page</h3>;

  return (
    <div>
      <TopicsSection chosenTopic={topic} />
      <h3>{topic} Articles</h3>
      <ArticleSorter 
        setSortBy={setSortBy} 
        setOrder={setOrder} 
        sortBy={sortBy} 
        order={order} 
      />
      <div className="whole-list">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
}