import {useState} from 'react'
import './App.css';

export function Like(){
    const [like, setLike] = useState(42);
    function handleClick(ev){
        ev.target.classList.toggle('like');
        if(ev.target.classList.contains('like')){
            setLike(like+1);
        }else{
            setLike(like-1);
        }
        
    }
    return <div className="Nickel"
    onClick={(event)=>handleClick(event)}
    >
     Likes {like}
    </div>
}