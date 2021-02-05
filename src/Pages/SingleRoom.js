import React, { Component } from 'react'
import deafultImg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
import  StyledHero  from '../components/StyledHero'


export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state  = {
            slug: this.props.match.params.slug,
            deafultImg  
        }

    }
    static contextType = RoomContext

    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)

        if (!room) {
            return <div className = 'error'>
                        <h3> No Such Room Could be Found... </h3>
                        <Link to = '/room' className = 'btn-primary'>
                            Back to Rooms
                        </Link>
                   </div>
                    }

        const { name,
                description,
                capacity,
                size,
                price,
                extras,
                breakfast,
                pets,
                images} = room

        return (
        <>
            <StyledHero img = {images[0] || this.state.deafultImg } >
                <Banner title = {`${name} room`}>
                    <Link to = '/room' className = 'btn-primary' >
                        Back to rooms
                    </Link>
                </Banner>
            </StyledHero> 
            <section className = 'single-room'>
                <div className = 'single-room-images'>
                    {images.map((img,index) => {
                        return <img src = {img} key = {index} alt = {name} />
                    })}
                </div>
                <div className = 'single-room-info'>
                    <article className = 'description'>
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className = 'info'>
                        <h3>info</h3>
                        <h6>Price: £{price}</h6>
                        <h6>Size: {size} SQFT</h6>
                        <h6>Max Capacity: { capacity > 1 ? `${capacity} People}` : `${capacity} Person`}</h6>
                        <h6> {pets > 0 ? 'Pets Allowed' : 'No Pets Allowed'}</h6>
                        <h6> {breakfast && 'Free Breakfast included'}</h6>
                    </article>
                </div>  
            </section>
            <section className = 'room-extras'>
                <h6>Extras</h6>
                <ul className = 'extras'>
                     {extras.map((item, index) => {
                     return <li key = {index}> - {item} </li>
                    })}
                </ul>
            </section>
        </>
        )
    }
}
