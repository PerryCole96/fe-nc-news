import { useContext, useState } from "react"
import { patchLike } from "../utils/api";
import UserContext from "../context/UserContext";

export default function LikeArticleButton({article_id, votes, updateVotes}){
    const {isLoggedIn} = useContext(UserContext)
    const [isLoadingDis, setIsLoadingDis] = useState(false);
    const [isLoadingLike, setIsLoadingLike] = useState(false);
    const [isError, setIsError] = useState(false);
    const [disabledLike, setDisabledLike] = useState(false)
    const [disabledDis, setDisabledDis] = useState(false)
   
    if(!isLoggedIn) return
    
    function handleChangeVotes(increment, buttonType){
        if(!isLoggedIn) return
        const newVotes = votes + increment

        if (newVotes < 0 ) return
        if (buttonType === "like") {
            setIsLoadingLike(true); setDisabledLike(true);
            setDisabledDis(false);
        } else {
        setIsLoadingDis(true); setDisabledLike(false);
            setDisabledDis(true);
        }
         
        updateVotes(newVotes)
       
        patchLike({article_id, inc_votes: increment})
        .catch(() => {
            updateVotes(votes)
            setIsError(true)        
        })
        .finally(() => {
            if (buttonType === "like") {
                setIsLoadingLike(false);
            } else {
                setIsLoadingDis(false);
            }
        });
    }

    if (isError) return <p>Could not alter votes.</p>

    return(
    <div className="opinion-buttons">
        <button className="like-button" 
        disabled={disabledLike||isLoadingLike} 
         onClick={(e) => {
            e.preventDefault()
            handleChangeVotes(1, "like")
         }}
        >Like</button>

        <button className="dislike-button" 
        disabled={disabledDis || isLoadingDis || votes <= 0}
         onClick={(e) => {
            e.preventDefault()
            handleChangeVotes(-1, "dislike")

         }}
        >Dislike</button>
    </div>
    )
};