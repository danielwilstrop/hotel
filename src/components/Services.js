import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: 'Adipisicing ipsum duis voluptate et dolor minim. Eiusmod esse ut voluptate amet'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Adipisicing ipsum duis voluptate et dolor minim. Eiusmod esse ut voluptate amet'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Adipisicing ipsum duis voluptate et dolor minim. Eiusmod esse ut voluptate amet'
            },
            {
                icon: <FaBeer />,
                title: 'Nicest Beers',
                info: 'Adipisicing ipsum duis voluptate et dolor minim. Eiusmod esse ut voluptate amet'
            },
        ]
    }

    render() {
        return (
            <section className = 'services'>
                 <Title title = 'services' />
                 <div className = 'services-center'>
                     {this.state.services.map((item, index) => {
                         return <article key = {index} className = 'service'>
                             <span>{item.icon}</span>
                             <h6>{item.title}</h6>
                             <p>{item.info}</p>
                         </article>
                     })}
                 </div>
            </section>
               
        )
    }
}
