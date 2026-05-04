import './Card.css';

function Card(){

    return <article 
    className="Card">
        <div>
            <img src="" 
            alt="image utilisateur"
            ></img>
        </div>
        <div>
            <h1>Pseudo</h1>
            <h2>Email</h2>
            <p>Description lorem ipsum</p>
        </div>
    </article>
}

export default Card;