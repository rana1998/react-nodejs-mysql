import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
           <h1>Page Not Found :</h1> 
           <h3>
               Go To the Home Page: <Link to="/">Home Page</Link>
           </h3>
        </div>
    )
}
