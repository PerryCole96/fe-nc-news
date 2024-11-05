import { useParams } from "react-router-dom"
import Header from "../components/Header"
import SingleArticleGenerator from "../components/SingleArticleGenerator"
import CommentList from "../components/CommentList"


export default function SingleArticlePage(){
    const {article_id} = useParams()
    
    
    return (
        <div>
            <Header />
            <SingleArticleGenerator article_id={article_id}/>
            <CommentList article_id={article_id}/>
        </div>
    )
}