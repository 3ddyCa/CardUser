import './Card.css';

function Card({user, children}){

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
            <h1>{user.pseudo}</h1>
            <h2>{user.email}</h2>
            <p>{user.description}</p>
        </article>
    </article>
}

export default Card;