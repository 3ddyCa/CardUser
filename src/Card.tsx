import './Card.css';
interface filteredUser{
    'pseudo':string, 
    'email':string, 
    'description':string,
    'sexe' : 'homme' | 'femme' | 'non-binaire'
}

function Card({user, children}){
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
    >
        
        <div>
            <img src="https://picsum.photos/200" 
            alt="image utilisateur"
            ></img>
        </div>
        <div>
            {children}
        </div>
        <article
                
        
        >
            <h1>{user.pseudo}</h1>
            
            <h2>{user.email}</h2>
            <p>{user.description}</p>
        </article>
    </article>
}

export default Card;