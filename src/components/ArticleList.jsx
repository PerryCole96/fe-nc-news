import { useEffect, useState } from "react"
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import ArticleSorter from "./ArticleSorter";

export default function ArticleList () {

const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");  

  useEffect(() => {
    setIsLoading(true);
    getArticles({ sort_by: sortBy, order })
      .then((data) => {
        setArticles(data.articles);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [sortBy, order]);

 if (isLoading) return <h3>Loading Articles...</h3>;
 if (isError) return <h3>Something went wrong, please refresh the page</h3>
    
 return(<div>
  <h3>all Articles</h3>
  <ArticleSorter 
        setSortBy={setSortBy} 
        setOrder={setOrder} 
        sortBy={sortBy} 
        order={order} 
      />
    <div className="whole-list" >
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />
      })}
    </div>
    </div>
    )
}