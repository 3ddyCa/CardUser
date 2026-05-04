import './Card.css';
interface filteredUser{
    'pseudo':string, 
    'email':string, 
    'description':string
}

function Card({user, children}){
    const filtered: filteredUser = user;
    return <article 
    className="Card">
        <div>
            <img src="https://picsum.photos/200" 
            alt="image utilisateur"
            ></img>
        </div>
        <div>
            {children}
        </div>
        <article>
            <h1>{filtered.pseudo}</h1>
            <h2>{filtered.email}</h2>
            <p>{filtered.description}</p>
        </article>
    </article>
}

export default Card;