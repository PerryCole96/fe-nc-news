import { useParams } from "react-router-dom"
import Header from "../components/Header"
import SingleArticleGenerator from "../components/SingleArticleGenerator"
export default function SingleArticlePage(){
    const {article_id} = useParams()
    return (
        <div>
            <Header />
            <SingleArticleGenerator article_id={article_id}/>
            
        </div>
    )
}