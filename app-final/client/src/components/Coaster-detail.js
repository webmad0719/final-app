import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/coaster.services'

import '../styles/coaster-detail.css'


class CoasterDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { coaster: {} }
        this.service = new Services()
    }

    componentDidMount() {
        this.service.getOneCoaster(this.props.match.params.id)
            .then(response => this.setState({ coaster: response.data }))
            .catch(err => console.log('err', err))
    }

    render() {
        return (
            <div className="container">
                <article className="coaster-detail">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h1>Detalles de {this.state.coaster.title}</h1>
                            <p><strong>Descripción:</strong> {this.state.coaster.description}</p>
                            <hr></hr>
                            <p><small>Longitud:</small> {this.state.coaster.length} | Inversiones: {this.state.coaster.inversions}</p>
                            <Link className="btn btn-big btn-dark" to="/coasters">Volver</Link>
                        </div>
                        <div className="col-md-4">
                            <img src={this.state.coaster.imageUrl} alt={this.state.coaster.title}></img>
                        </div>
                    </div>
                </article>
            </div>
        )
    }

}

export default CoasterDetail