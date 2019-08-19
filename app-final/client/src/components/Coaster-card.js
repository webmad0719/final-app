import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/coaster-card.css'


const CoasterCard = ({ title, description, imageUrl, _id }) => {

    return (
        <div className="col-md-3">
            <article className="coaster-card">
                <img src={imageUrl} alt={title} />
                <h4>{title}</h4>
                <hr></hr>
                <Link className="btn btn-sm btn-dark" to={`/coasters/${_id}`}>Ver detalles</Link>
                <p>{description}</p>
            </article>
        </div>
    )
}

export default CoasterCard