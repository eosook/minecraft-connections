import './CardList.scss'
import Card from './Card/Card'
import Buttons from './Buttons/Buttons'
import { useState, useEffect } from 'react'

function CardList(){
    const [ingredientsList, setIngredientsList] = useState([
        {
            ingredient: "stick",
            connection: "campfire",
            image: "https://media.baamboozle.com/uploads/images/546699/1638444487_32182_url.png"
        }
    ])

    // useEffect(() => {

    // })
    return(
        <div>
            {ingredientsList.map((ingredient) => {
                return <Card ingredient={ingredient.ingredient} connection={ingredient.connection} image={ingredient.image}/>
            })}
            <Buttons />
        </div>
    )
}

export default CardList;