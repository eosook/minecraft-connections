import './Card.scss'
import { useState, useEffect } from 'react';

function Card({ingredient: { ingredient, image, id, connection }, onClick, selected, isConnected, clear, setIsConnected}){
    const [isSelected, setIsSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    
    useEffect(() => {
        const found = selected.find((card) => {
            return (card.ingredient === ingredient)
        })
        if (found){
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [selected])

    useEffect(() =>{
        const found = selected.find((card) => {
            return (card.ingredient === ingredient)
        })
        console.log(isConnected);
        console.log(found);
        if(isConnected && found){
            setIsCorrect(true);
            setIsSelected(false);
            setIsConnected(false);
            clear();
        } else {
            setIsSelected(false);
        }
    }, [isConnected])
    
    return (
        <div className={` ${isSelected ? 'card--selected card' : 'card'} ${isCorrect ? 'card--connected card' : 'card'}`} onClick={() => {
            onClick({ingredient, connection})
        }}>
            <img className="card__image" src={image}/>
        </div>
    )
}

export default Card;