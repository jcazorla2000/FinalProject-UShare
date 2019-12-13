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
                <div style={{"height": "60vh","display": "flex", "flexDirection": "column", "justifyContent": "space-around", "alignItems": "center"}}>
                    <div>
                        <h1>Perfil</h1>
                    </div>
                    <Avatar style={{ backgroundColor: 'whitesmoke', width: "100px", height: "100px" }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    {/* <img style={{"width": "40vw"}} src={JSON.parse(localStorage.user).profile.photo} alt="ProfileImage"/> */}
                    <h2>{JSON.parse(localStorage.user).fullName}</h2>
                    <h3>Email</h3>
                    <h4 style={{"marginTop": "-30px"}}>{JSON.parse(localStorage.user).email}</h4>
                    <h3>Estudiante en</h3>
                    <h4 style={{"marginTop": "-30px"}}>{JSON.parse(localStorage.user).profile.university}</h4>
                    <h3>Viajes realizados: {JSON.parse(localStorage.user).profile.numberRides}</h3>
                    <Button 
                        style={{"backgroundColor": "#31837c", "border": "2px solid #31837c"}}
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
