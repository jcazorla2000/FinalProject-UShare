import React from 'react'
import NavBar from '../NavBar';
import { MyContext } from '../../context'

export default function Feed(props) {
    return (
        <MyContext.Consumer>
        {context => (
            <>
                {(localStorage.user) ?
                    <>
                        <NavBar>
                        </NavBar>
                        <div>
                            <h1>Hola</h1>
                        </div>
                    </>
                    :
                    props.history.push("/login")
                }
            </>
        )}
        </MyContext.Consumer>
    )
}
