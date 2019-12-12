import React from 'react'
import NavBar from '../NavBar'
import { MyContext } from '../../context'
import AuthTemplate from '../auth/AuthTemplate'
import FooterLayout from '../Footer'

export default function Profile(props) {
    return (
        <MyContext.Consumer>
        {context => (
            <>
            <NavBar>
            </NavBar>
            <AuthTemplate>
                {(localStorage.user) ?
                <>
                    <div>
                        <h1>Profile</h1>
                    </div>
                    <img style={{"width": "40vw"}} src={JSON.parse(localStorage.user).profile.photo} alt="ProfileImage"/>
                    <h2>{JSON.parse(localStorage.user).fullName}</h2>
                    <h2 onClick={context.handleLogout}>Logout</h2>
                </>
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
