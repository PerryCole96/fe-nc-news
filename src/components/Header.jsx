import UserNavigation from "./UserNavigation"
export default function Header (){
    return (
        <div className="header">
            <h2 className="logo">NC News</h2>
            <UserNavigation />
        </div>
        
    )
}