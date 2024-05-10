import React from 'react'
import Menu from '../../components/Menu'

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <div>
                <p>Nombre: Juan</p>
                <p>Apellido: González</p>
                <p>Fecha de nacimiento: 25/08/2002</p>
                <p>Correo: juangonzalez@hotmail.com</p>
            </div>
            <Menu page={"profile"}/>
        </div>
    )
}

export default Profile