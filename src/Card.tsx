import './Card.css';

function Card({pseudo, email, description, children}){

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
            <h1>{pseudo}</h1>
            <h2>{email}</h2>
            <p>{description}</p>
        </article>
    </article>
}

export default Card;