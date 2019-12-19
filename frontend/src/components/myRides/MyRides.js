import React from 'react'
import NavBar from '../NavBar';
import { MyContext } from '../../context'
import styled from "styled-components"
import FooterLayout from '../Footer';
import { Button, Icon } from "antd"

const CustomCard = styled.div`
    height: 230px;
    width: 80vw;
    background-color: whitesmoke;
    border: 4px solid whitesmoke;
    border-radius: 6px;
    boxShadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    margin: 3vh 0;
`

export default function MyRides(props) {
    return (
        <MyContext.Consumer>
            {context => (
                <>
                {(localStorage.user) ?
                    <>
                        <NavBar></NavBar>
                        <div style={{"width": "100vw","height": "100vh", "backgroundColor":"#79a7a3", "paddingTop": "2vh"}}>
                            {(JSON.parse(localStorage.user).role === "driver") ? 
                            <>
                            <div>
                                <h2><strong>Mis viajes</strong></h2>
                            </div>
                            <div style= {{"overflow": "scroll", "display" : "flex", "flexDirection": "column", "alignItems": "center", "height": "40vh"}}>
                                {(JSON.parse(localStorage.user).ownedRides.length === 0) ? 
                                <h2>Aun no tienes viajes</h2>
                                :
                                JSON.parse(localStorage.user).ownedRides.map((element, index)=> (
                                    <div key={index} style={{"height": "200px", "marginBottom": "5vh", "color": "black"}}>
                                        <CustomCard key={index}>
                                            <p><strong>Hora Salida</strong></p>
                                            <p>{element.departureTime}</p>
                                            {(element.rideDirection  === "toUniversity") ? 
                                            <>
                                                <p><strong>Salida</strong> {(element.placeName)} </p>
                                                <Icon style={{color: "black"}} type="down" />
                                                <p><strong>Destino</strong> {(element.universityDirection === "Tecnologico de Monterrey, Santa Fe") ? "TEC Campus Santa Fe":"Iberoamericana"}</p>
                                            </>
                                            :
                                            <>
                                                <p><strong>Salida</strong> {(element.universityDirection === "Tecnologico de Monterrey, Santa Fe") ? "TEC Campus Santa Fe":"Iberoamericana"} </p>
                                                <Icon style={{color: "black"}} type="down" />
                                                <p><strong>Destino</strong> {(element.placeName)}</p>
                                                
                                            </>
                                            }
                                        <Button style={{"marginBottom" : "1vh", "backgroundColor": "black", "border": "2px solid black"}} onClick={(e) => context.endRide(e, element._id)} type="primary" htmlType="submit">
                                            Terminar viaje
                                        </Button>
                                        </CustomCard>
                                    </div>
                                ))}
                            </div>
                            </>
                            :
                            null
                            }
                            <h2 style={{"marginTop":"5vh"}}><strong>Pasajero en</strong></h2>
                            <div style= {{"overflow": "scroll", "display" : "flex", "flexDirection": "column", "alignItems": "center", "height": "40vh"}}>
                                {(JSON.parse(localStorage.user).actualRides.length === 0) ? 
                                <h2>Aun no tienes viajes</h2>
                                :
                                
                                JSON.parse(localStorage.user).actualRides.map((element, index)=> (
                                    <div key={index} style={{"height": "200px", "marginBottom": "5vh", "color": "black"}}>
                                        <CustomCard key={index}>
                                            <p><strong>Hora Salida</strong></p>
                                            <p>{element.departureTime}</p>
                                            {(element.rideDirection  === "toUniversity") ? 
                                            <>
                                                <p><strong>Salida</strong> {(element.placeName)} </p>
                                                <Icon style={{color: "black"}} type="down" />
                                                <p><strong>Destino</strong> {(element.universityDirection === "Tecnologico de Monterrey, Santa Fe") ? "TEC Campus Santa Fe":"Iberoamericana"}</p>
                                            </>
                                            :
                                            <>
                                                <p><strong>Salida</strong> {(element.universityDirection === "Tecnologico de Monterrey, Santa Fe") ? "TEC Campus Santa Fe":"Iberoamericana"} </p>
                                                <Icon style={{color: "black"}} type="down" />
                                                <p><strong>Destino</strong> {(element.placeName)}</p>
                                                
                                            </>
                                            }
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
