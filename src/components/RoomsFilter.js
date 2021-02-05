import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'

// good algorithm for unique items using Set() and es6
const getUnique = (arr, value) => {
    return [...new Set(arr.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSizze,
        maxSize,
        breakfast,
        pets
    } = context

    //Render unique options for room type Select input
    let types = getUnique(rooms, 'type')
    types = ['all',...types]
    types = types.map((item, index) => {
            return <option value = {item} key = {index}>{item}</option>
    })

    return (
        <section className = 'filter-container'>
            <Title title = "search room" />
            <form className = 'filter-form'>
                {/* select type*/}
                <div className = 'form-group'>
                    <label htmlFor ='type'>Room type</label>
                    <select name = 'type' id = 'type' value = {type} className = 'form-control' onChange = {handleChange}>
                        {types}
                    </select>
                </div>
            </form>
        </section>
    )
}
