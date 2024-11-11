import { Link } from "react-router-dom";

export default function TopicsSection(){
    
    return (
        <div className="topic-section">
            <h3>Choose an Article Topic!</h3>
            <ul>
                <li>
                <Link to="/">All Articles</Link>
                </li>
                <li>
                <Link to="/topics/coding">Coding</Link>
                </li>
                <li>
                <Link to="/topics/cooking">Cooking</Link>
                </li>
                <li>
                <Link to="/topics/football">Football</Link>
                </li>
             </ul>
        </div>
    )
}