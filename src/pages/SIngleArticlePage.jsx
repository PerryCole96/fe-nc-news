import { useParams } from "react-router-dom"
import SingleArticleGenerator from "../components/SingleArticleGenerator"
import CommentList from "../components/CommentList"



export default function SingleArticlePage(){
    const {article_id} = useParams()
    
    
    return (
        <div>
            <SingleArticleGenerator article_id={article_id}/>
            <CommentList article_id={article_id}/>
            
        </div>
    )
}