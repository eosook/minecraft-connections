import './Card.scss'

function Card({ingredient, connection, image}){
    return (
        <div className="card">
            <img className="card__image" src={image}/>
        </div>
    )
}

export default Card;