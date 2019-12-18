import React from 'react'
import NavBar from '../NavBar';
import { MyContext } from '../../context'
import styled from "styled-components"
import FooterLayout from '../Footer';
import { Button, Select, Icon } from "antd"

const { Option } = Select;

const CustomCard = styled.div`
    height: 250px;
    width: 80vw;
    background-color: whitesmoke;
    border: 4px solid whitesmoke;
    border-radius: 6px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    margin: 3vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        color: black;
    }
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
                                <h2 style={{"marginBottom":"10px"}} onClick={context.findRides}>Viajes disponibles</h2>
                            </div>
                            <div>
                                
                                <h3>Máxima distancia de los viajes</h3>
                                    <Select placeholder="Seleccione" default="1000"  style={{ width: 130 }} onChange={context.handleChangeMaxDistance}>
                                        <Option value="500">500m</Option>
                                        <Option value="1000">1km</Option>
                                        <Option value="2000">2km</Option>
                                        <Option value="3000">3km</Option>
                                        <Option value="4000">4km</Option>
                                    </Select>
                                
                               
                                    <Button style={{"marginBottom" : "1vh", "backgroundColor": "black", "border": "2px solid black"}} onClick={context.findRides} type="primary" htmlType="submit">
                                        Buscar
                                    </Button>
                               
                            </div>
                            <div style= {{"overflow": "scroll", "display" : "flex", "flexDirection": "column", "alignItems": "center", "height": "85vh"}}>
                                {context.foundRides.map((element, index)=> (
                                    <div key={index} style={{"height": "220px", "marginBottom": "5vh"}}>
                                    <CustomCard key={index}>
                                        <div style={{"display":"flex", "justifyContent": "flexStart", "width": "100%"}} >
                                            <img style={{"width": "40px", "height": "40px", "margin":"10px 20px 0 10px"}} src={element.driver.profile.photo} alt="Driverimage"/>
                                            <div style={{"display":"flex", "flexDirection": "column"}}>
                                                <h4>{element.driver.fullName}</h4>
                                                <p>{(element.driver.profile.university === "Tecnologico de Monterrey, Santa Fe") ? "TEC Campus Santa Fe":"Universidad Iberoamericana"}</p>
                                            </div>
                                        </div>
                                        <div style={{"display":"flex","justifyContent":"center", "width": "100%"}}>
                                            <p style={{"marginLeft": "20px"}}><strong>Hora salida</strong> {element.departureTime}</p>
                                            <p style={{"marginLeft": "20px"}}><strong>Plazas restantes</strong> {element.numberPlaces}</p>
                                        </div>
                                        <div style={{"display":"flex","flexDirection":"column"}}>
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
                                                <Button style={{"marginBottom" : "1vh", "backgroundColor": "black", "border": "2px solid black", "color": "white"}} onClick={(e) => context.selectPlace(e, element._id, JSON.parse(localStorage.user)._id)} type="primary" htmlType="submit">
                                                    Seleccionar plaza
                                                </Button>
                                        </div>
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
