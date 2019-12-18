import React from 'react'
import NavBar from '../NavBar'
import { MyContext } from '../../context'
import AuthTemplate from '../auth/AuthTemplate'
import FooterLayout from '../Footer'
import {Avatar, Button} from "antd"

export default function Profile(props) {
    return (
        <MyContext.Consumer>
        {context => (
            <>
            <NavBar>
            </NavBar>
            <AuthTemplate>
                {(localStorage.user) ?
                <div style={{"height": "60vh","display": "flex", "flexDirection": "column", "justifyContent": "space-around", "alignItems": "center", "marginTop": "20px"}}>
                    <div>
                        <h1><strong>Perfil</strong></h1>
                    </div>
                    <Avatar style={{ backgroundColor: 'whitesmoke', width: "100px", height: "100px" }} src={JSON.parse(localStorage.user).profile.photo} />
                    {/* <img style={{"width": "40vw"}} src={JSON.parse(localStorage.user).profile.photo} alt="ProfileImage"/> */}
                    <h2><strong>{JSON.parse(localStorage.user).fullName}</strong></h2>
                    <h3><strong>Email</strong></h3>
                    <h4 style={{"marginTop": "-30px"}}>{JSON.parse(localStorage.user).email}</h4>
                    <h3><strong>Estudiante en</strong></h3>
                    <h4 style={{"marginTop": "-30px"}}>{JSON.parse(localStorage.user).profile.university}</h4>
                    <h3><strong>Número de teléfono</strong> +55 {JSON.parse(localStorage.user).profile.telephoneNumber}</h3>
                    <Button 
                        style={{"backgroundColor": "black", "border": "2px solid black"}}
                        type="primary" 
                        htmlType="submit" 
                        className="login-form-button"
                        onClick={e => {context.handleLogout(e)}}
                    >
                        Cerrar sesión
                    </Button>
                </div>
                :
                props.history.push("/login")
                }
                </AuthTemplate>
                <FooterLayout></FooterLayout>
            </>
        )}
        </MyContext.Consumer>
    )
}
