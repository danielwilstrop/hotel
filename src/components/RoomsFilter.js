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
        minSize,
        maxSize,
        breakfast,
        pets
    } = context

    //Render unique options for room type Select input
    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    //Render list for select options for room capacity (similar to unique room types)
    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option id={index} value={item}> {item} </option>
    })

    return (
        <section className='filter-container'>
            <Title title="search room" />
            <form className='filter-form'>
                {/* select type*/}
                <div className='form-group'>
                    <label htmlFor='type'>Room type</label>
                    <select name='type'
                        id='type'
                        value={type}
                        className='form-control'
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* select no. of guests*/}
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select name='capacity'
                        id='capacity'
                        value={capacity}
                        className='form-control'
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* Room Price Filter */}
                <div className='form-group'>
                    <label htmlFor='price' > room Price £{price} </label>
                    <input type='range'
                        name='price'
                        id='price'
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                {/* Capacity Filter */}
                <div className='form-group'>
                    <lablel htmlFor='size'>Room Size (Sq. Ft)</lablel>
                    <div className='size-inputs'>
                        <input id='size'
                            type='number'
                            name='minSize'
                            value={minSize}
                            onChange={handleChange}
                            className='size-input'
                        />
                        <input id='size'
                            type='number'
                            name='maxSize'
                            value={maxSize}
                            onChange={handleChange}
                            className='size-input'
                        />
                    </div>
                </div>
                {/* extras check boxes */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox'
                            name='breakfast'
                            id='breakfast'
                            checked={breakfast}
                            onChange={handleChange} />
                        <label htmlFor='breakfast'>Breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input type='checkbox'
                            name='pets'
                            id='pets'
                            checked={pets}
                            onChange={handleChange} />
                        <label htmlFor='pets'>Pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
