import React from 'react'
import NavBar from '../NavBar';
import { MyContext } from '../../context'
import styled from "styled-components"
import FooterLayout from '../Footer';

const CustomCard = styled.div`
    height: 110px;
    width: 80vw;
    background-color: whitesmoke;
    border: 4px solid whitesmoke;
    border-radius: 6px;
    boxShadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    margin: 3vh 0;
`

export default function Feed(props) {
    return (
        <MyContext.Consumer>
        {context => (
            <>
                {(localStorage.user) ?
                    <>
                        <NavBar>
                        </NavBar>
                        <div style={{"width": "100vw","height": "100vh", "backgroundColor":"#31837c", "paddingTop": "2vh"}}>
                            <div>
                                <h2 style={{"marginottom":"4px"}} onClick={context.findRides}>Viajes disponibles</h2>
                            </div>
                            <div style= {{"overflow": "scroll", "display" : "flex", "flexDirection": "column", "alignItems": "center", "height": "85vh"}}>
                                {context.foundRides.map((element, index)=> (
                                    <div key={index} style={{"height": "80px", "marginBottom": "5vh"}}>
                                    <CustomCard key={index}>
                                        <h4>{element.driver.fullName}</h4>
                                    </CustomCard>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <FooterLayout></FooterLayout>
                    </>
                    :
                    props.history.push("/login")
                }
            </>
        )}
        </MyContext.Consumer>
    )
}
