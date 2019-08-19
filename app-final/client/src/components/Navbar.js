import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AuthServices from '../services/auth.services'

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.authServices = new AuthServices()
    }


    toggleMenu = () => document.querySelector('.menu').classList.toggle('abierto')

    logout = () => {
        this.authServices.logout()
            .then(x => {
                this.props.setUser(null)
            })
            .catch(err => console.log(err))
    }


    render() {

        const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'invitado'


        if (this.props.userInSession) {
            return (
                <>
                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        <h1>Roller Coaster App</h1>
                        <nav>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/profile">Perfil</Link></li>
                                <li><Link to="/coasters">Montañas rusas</Link></li>
                                <li><div onClick={this.logout}>Cerrar sesión</div></li>
                                <li><small>Bienvenid@, {saludo}</small></li>
                            </ul>
                        </nav>
                    </header>
                </>
            )
        } else {
            return (
                <>
                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        <h1>Roller Coaster App</h1>
                        <nav>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/profile">Perfil</Link></li>
                                <li><Link to="/coasters">Montañas rusas</Link></li>
                                <li><Link to="/signup">Registro</Link></li>
                                <li><Link to="/login">Inicio de sesión</Link></li>
                                <li><small>Bienvenid@, {saludo}</small></li>
                            </ul>
                        </nav>
                    </header>
                </>
            )
        }

    }
}
export default NavBar