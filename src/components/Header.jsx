import { Link } from "react-router-dom" 
import UserNavigation from "./UserNavigation"
export default function Header (){
    return (
        <div className="header">
            <Link to={`/`} className="logo">NC News</Link>
            <UserNavigation />
        </div>
        
    )
}