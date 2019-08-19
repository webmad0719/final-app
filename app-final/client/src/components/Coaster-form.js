import React, { Component } from 'react'
import Services from '../services/coaster.services'



class CoasterForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            length: '',
            inversions: '',
            imageUrl: ''
        }
        this.service = new Services()
    }


    handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

    handleFormSubmit = e => {
        e.preventDefault()
        this.service.postCoaster(this.state)
            .then(x => {
                this.props.closeModal()
                this.props.updateCoasterList()
            })
            .catch(err => console.log('error', err))
    }

    render() {
        return (
            <>
                <h4>Nueva montaña rusa</h4>

                <hr></hr>

                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="input-nombre">Nombre</label>
                        <input name="title" type="text" className="form-control" id="input-nombre" onChange={this.handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-descripcion">Descripción</label>
                        <input name="description" type="text" className="form-control" id="input-descripcion" onChange={this.handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-length">Longitud</label>
                        <input name="length" type="number" className="form-control" id="input-length" onChange={this.handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-inv">Inversiones</label>
                        <input name="inversions" type="number" className="form-control" id="input-inv" onChange={this.handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-img">URL imagen</label>
                        <input name="imageUrl" type="text" className="form-control" id="input-img" onChange={this.handleChangeInput} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-sm">Crear</button>
                    <button className="btn btn-dark btn-sm" onClick={this.props.closeModal}>Cerrar</button>
                </form>
            </>
        )
    }

}

export default CoasterForm