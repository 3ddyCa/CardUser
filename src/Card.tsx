import './Card.css';
import {Like} from './Like.tsx';
interface filteredUser{
    'pseudo':string, 
    'email':string, 
    'description':string,
    'sexe' : 'homme' | 'femme' | 'non-binaire'
}

function Card({user, children}){
    function handleMouseover(ev){
        ev.target.classList.add('border');
    }
    function handleMouseleave(ev){
        ev.target.classList.remove('border');
    }
    //const filtered: filteredUser = user;
    let classe;
    {switch(user.sexe){
        case "femme":
            classe = {backgroundColor:"lightblue"};
        break;
        case "homme":
            classe = {backgroundColor:"pink"};
        break;
        case "non-binaire":
            classe = {backgroundColor:"lemonchiffon"};
        break;

    }}
    return <article 
    className="Card "
    style={classe}
    onMouseOver={(event)=>handleMouseover(event)}
    onMouseLeave={(event)=>handleMouseleave(event)}   
    >
        
        <div onMouseOver={(event)=>event.stopPropagation()}>
            <img src="https://picsum.photos/200" 
            alt="image utilisateur"
            ></img>
        </div>
        <div onMouseOver={(event)=>event.stopPropagation()}>
            {children}
        </div>
        <article
            onMouseOver={(event)=>event.stopPropagation()} 
        
        >
            <h1>{user.pseudo}</h1>
            
            <h2>{user.email}</h2>
            <p>{user.description}</p>
            <Like />
        </article>
    </article>
}

export default Card;