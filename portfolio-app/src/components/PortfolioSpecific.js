import React from 'react'
const PortfolioSpecific = (props) => {
    console.log(props)
    return (
        <div>
            <h1>A thing I've done</h1>
            <p>This page is for the item with ide of {props.match.params.id}</p>
        </div>
    )
}

export default PortfolioSpecific