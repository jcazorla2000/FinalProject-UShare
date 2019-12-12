import React from 'react'
import NavBar from './NavBar'
import AuthTemplate from './auth/AuthTemplate';
import { MyContext } from '../context'
import { Form, Button, Select, TimePicker, Input } from "antd"
import moment from "moment"
import FooterLayout from './Footer';
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

const { Option } = Select;
const format = 'HH:mm';
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";

export default function Create(props) {
    return (
        <MyContext.Consumer>
        {context => (
        <>
            {(localStorage.user) ? (JSON.parse(localStorage.user).role === "driver") ? 
            <>
                <NavBar>
                </NavBar>
                <AuthTemplate>
                <div style={{"marginTop" : "5vh"}}>
                    <h1>Creación</h1>
                    {(context.formCreateStep > 0) ?
                    (context.rideDirection === "toUniversity") ?
                    <>
                        <h3>A qué universidad vas?</h3>
                        <Form.Item>
                            <Select placeholder="Seleccione" default="Tecnologico de Monterrey, Santa Fe"  style={{ width: 250 }} onChange={context.handleChangeUniversityDirection}>
                                <Option value="Tecnologico de Monterrey, Santa Fe">Tecnologico de Monterrey, Santa Fe</Option>
                                <Option value="Universidad Iberoamericana">Universidad Iberoamericana</Option>
                            </Select>
                        </Form.Item>
                        
                            <h4>De dónde sales?</h4>

                            <div style={{ height: "30vh" , "width" : "82vw"}}>
                                <MapGL
                                    ref={context.mapRef}
                                    {...context.viewport}
                                    width="100%"
                                    height="100%"
                                    onViewportChange={context.handleViewportChange}
                                    mapboxApiAccessToken={MAPBOX_TOKEN}
                                >
                                <Geocoder
                                    mapRef={context.mapRef}
                                    onResult={context.handleOnResult}
                                    onViewportChange={context.handleGeocoderViewportChange}
                                    mapboxApiAccessToken={MAPBOX_TOKEN}
                                    position="top-left"
                                />
                                <DeckGL {...context.viewport} layers={[context.searchResultLayer]} />
                                </MapGL>
                            </div>
                            
                        
                        <Form.Item>
                            <h4>Número de plazas disponibles</h4>
                            <Select name="numberPlaces" placeholder="Seleccione" default="1"  style={{ width: 130 }} onChange={context.handleChangeNumberPlaces}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <h4>A qué hora sales?</h4>
                            <TimePicker placeholder="Seleccione" defaultValue={moment('12:08', format)} format={format} onChange={context.handleChangeDepartureCreate}/>
                        </Form.Item>
                        <Form.Item>
                        <Button style={{"marginBottom" : "1vh", "backgroundColor": "#31837c", "border": "2px solid #31837c"}} onClick={(e) => context.handleCreateSubmit(e, () => props.history.push('/create'))} type="primary" htmlType="submit">
                            Finalizar
                        </Button>
                        </Form.Item>
                    </>
                    :
                    <>
                        <h3>De qué universidad sales?</h3>
                        
                            <Select placeholder="Seleccione" default="Tecnologico de Monterrey, Santa Fe"  style={{ width: 250 }} onChange={context.handleChangeUniversityDirection}>
                                <Option value="Tecnologico de Monterrey, Santa Fe">Tecnologico de Monterrey, Santa Fe</Option>
                                <Option value="Universidad Iberoamericana">Universidad Iberoamericana</Option>
                            </Select>
                            <Form.Item></Form.Item>
                            <h4>A dónde vas?</h4>
                            <div style={{ height: "26vh" , "width" : "82vw"}}>
                                <MapGL
                                    ref={context.mapRef}
                                    {...context.viewport}
                                    width="100%"
                                    height="100%"
                                    onViewportChange={context.handleViewportChange}
                                    mapboxApiAccessToken={MAPBOX_TOKEN}
                                >
                                <Geocoder
                                    mapRef={context.mapRef}
                                    onResult={context.handleOnResult}
                                    onViewportChange={context.handleGeocoderViewportChange}
                                    mapboxApiAccessToken={MAPBOX_TOKEN}
                                    position="top-left"
                                />
                                <DeckGL {...context.viewport} layers={[context.searchResultLayer]} />
                                </MapGL>
                            </div>
                            <Form.Item></Form.Item>
                        
                        <Form.Item>
                            <h4>Número de plazas disponibles</h4>
                            <Select placeholder="Seleccione" default="1"  style={{ width: 130 }} onChange={context.handleChangeNumberPlaces}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <h4>A qué hora sales?</h4>
                            <TimePicker placeholder="Seleccione" defaultValue={moment('12:08', format)} format={format} onChange={context.handleChangeDepartureCreate}/>
                        </Form.Item>
                        <Form.Item>
                            <Button style={{"marginBottom" : "1vh", "backgroundColor": "#31837c", "border": "2px solid #31837c"}} onClick={(e) => context.handleCreateSubmit(e, () => props.history.push('/create'))} type="primary" htmlType="submit">
                                Finalizar
                            </Button>
                        </Form.Item>
                    </>
                    :
                    
                    <>
                        <Form.Item>
                            <Select placeholder="Seleccione" default="Tecnologico de Monterrey, Santa Fe"  style={{ width: 250 }} onChange={context.handleChangeRideDirection}>
                                <Option value="toUniversity">Voy a la universidad</Option>
                                <Option value="fromUniversity">Vuelvo de la universidad</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button style={{"backgroundColor": "#31837c", "border": "2px solid #31837c"}} onClick={context.nextCreateStep} type="primary" htmlType="submit">
                                Siguiente
                            </Button>
                        </Form.Item>
                    </>
                    }
                </div>
                </AuthTemplate>
            </>
            :
            props.history.push("/login")
            : 
            ""
            }
            <FooterLayout></FooterLayout>
        </>
        )}
        </MyContext.Consumer>
    )
}
