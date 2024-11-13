import React from 'react'
import TitleHeader from './TitleHeader'
import ItemListContainer from './ItemListContainer'

const RopaPage = ({ tiporopa }) => {
    return (
        <div>
            <TitleHeader greeting="Bienvenidos a mi Ecommerce" />
            <ItemListContainer tiporopa={tiporopa} />
        </div>
    )
}

export default RopaPage
