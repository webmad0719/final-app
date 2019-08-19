import React, { Component } from 'react'
import Services from '../services/coaster.services'

import CoasterCard from './Coaster-card'
import CoasterForm from './Coaster-form'

import Dialog from '@material-ui/core/Dialog';


class CoasterList extends Component {

    constructor() {
        super()
        this.state = { coasters: [], showModal: false }
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getCoasters()
            .then(response => this.setState({ coasters: response.data }))
            .catch(err => console.log(err))
    }

    handleModalOpen = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })


    render() {

        return (
            <>
                <div className="container">

                    <Dialog onClose={this.handleModalClose} open={this.state.showModal} className="modal-form">
                        <CoasterForm closeModal={this.handleModalClose} updateCoasterList={this.updateList} />
                    </Dialog>

                    <h1>Listado de montañas rusas</h1>

                    {this.props.userInSession && <button className="btn btn-dark btn-big" onClick={this.handleModalOpen}>Nueva montaña rusa</button>}

                    <div className="row coasters-list">

                        {this.state.coasters.map(coaster => <CoasterCard key={coaster._id} {...coaster} />)}

                    </div>
                </div>
            </>
        )
    }
}


export default CoasterList