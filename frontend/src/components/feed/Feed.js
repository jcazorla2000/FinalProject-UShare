import React from 'react'
import NavBar from '../NavBar';
import { MyContext } from '../../context'
import AuthTemplate from '../auth/AuthTemplate';
import styled from "styled-components"

export default function Feed(props) {
    return (
        <MyContext.Consumer>
        {context => (
            <>
                {(localStorage.user) ?
                    <>
                        <NavBar>
                        </NavBar>
                        <AuthTemplate>
                            <div>
                                <h1 onClick={context.findRides}>Hola</h1>
                            </div>
                        </AuthTemplate>
                    </>
                    :
                    props.history.push("/login")
                }
            </>
        )}
        </MyContext.Consumer>
    )
}
