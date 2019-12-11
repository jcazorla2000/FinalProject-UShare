import React from 'react'
import NavBar from '../NavBar'
import { MyContext } from '../../context'

export default function Profile() {
    return (
        <MyContext.Consumer>
        {context => (
            <>
                <NavBar>
                </NavBar>
                <div>
                    <h1>Profile</h1>
                </div>
            </>
        )}
        </MyContext.Consumer>
    )
}
