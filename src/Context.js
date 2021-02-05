import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext()

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSixe: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    componentDidMount(){
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map((item) => item.price))
        let maxSize = Math.max(...rooms.map((item) => item.size))
        this.setState({ 
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }

    formatData(items) {
        let tempItems = items.map((item) => {
            let id = item.sys.id
            let images = item.fields.images.map(image =>  image.fields.file.url )
            let room = { ...item.fields, images, id }
            return room
        })
        return tempItems
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find((room) => 
            room.slug === slug
        )
        return room
    }

    handleChange = (e) => {
        const target = e.target
        const name = e.target.name
        const value = e.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        },
        this.filterRooms)
    }

    filterRooms = () => {
        let { rooms, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = this.state
            //all the rooms 
            let tempRooms = [...rooms]

            //parse values of capacity as select box returns a string
            capacity = parseInt(capacity)

            //filter by type
                if (type !== 'all'){
                    tempRooms = tempRooms.filter(room => room.type === type )
                }

            //filter by capacity
                if (capacity !== 1){
                    tempRooms = tempRooms.filter(room => room.capacity >= capacity)
                }

            //filter by price
                tempRooms = tempRooms.filter(room => room.price <= price)

            //set state after the releavant filters applied
            this.setState({
                sortedRooms: tempRooms
            })
    }

    render() {
        return (
            <RoomContext.Provider value = {{
                 ...this.state,
                 getRoom: this.getRoom,
                 handleChange: this.handleChange
                  }}
                 >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component) {

}

export{ RoomProvider, RoomConsumer, RoomContext }