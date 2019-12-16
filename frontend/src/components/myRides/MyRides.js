import React from 'react'
import NavBar from '../NavBar';
import { MyContext } from '../../context'
import styled from "styled-components"
import FooterLayout from '../Footer';
import { Button } from "antd"

const CustomCard = styled.div`
    height: 160px;
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
                        <div style={{"width": "100vw","height": "100vh", "backgroundColor":"#31837c", "paddingTop": "2vh"}}>
                            <div>
                                <h2>Mis viajes</h2>
                            </div>
                            <div style= {{"overflow": "scroll", "display" : "flex", "flexDirection": "column", "alignItems": "center", "height": "85vh"}}>
                                {JSON.parse(localStorage.user).ownedRides.map((element, index)=> (
                                    <div key={index} style={{"height": "130px", "marginBottom": "5vh", "color": "black"}}>
                                        <CustomCard key={index}>
                                            <p>{element.placeName}</p><p>{element.universityDirection}</p>
                                            {/* <p>{element.rideDirection}</p> */}
                                            <p>{element.departureTime}</p>
                                        <Button style={{"marginBottom" : "1vh", "backgroundColor": "#31837c", "border": "2px solid #31837c"}} onClick={(e) => context.endRide(e, element._id)} type="primary" htmlType="submit">
                                            Terminar viaje
                                        </Button>
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
