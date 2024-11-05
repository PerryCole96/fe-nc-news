import { useEffect, useState } from "react"
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList () {

const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

 useEffect(() => {
    
    setIsLoading(true)
   
    getArticles()
    .then((data) => {
      setArticles(data.articles)
    })
    .catch(() => setIsError(true))
    .finally(() => setIsLoading(false))
 }, [])

 if (isLoading) return <div>isLoading...</div>;
 if (isError) return <div>Something went wrong, please refresh the page</div>;
    
 return(
    <div className="whole-list" >
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
    )
}