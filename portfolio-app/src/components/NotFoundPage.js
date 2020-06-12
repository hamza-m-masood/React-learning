import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundPage = () => (
    <div>
        {/* //link does client side routing instead of href contacting server */}
        404 - <Link to="/">Go home</Link>
    </div>
)

export default NotFoundPage