import React from 'react'
import { NavLink } from 'react-router-dom'
const Portfolio = () => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the following things I've done</p>

        <NavLink to="/portfolio/1" activeClassName="is-active">Item one</NavLink>
        <NavLink to="/portfolio/2" activeClassName="is-active">Item two</NavLink>
    </div>
)
export default Portfolio
