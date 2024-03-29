import React from 'react'
import { Steps } from 'antd';
import { MyContext } from '../../context'
import {Link} from "react-router-dom"

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Select,
    Button
  } from 'antd';
const { Step } = Steps;
const { Option } = Select;

const prefixSelector = (
    <Select placeholder="+55" style={{ width: 70 }}>
        <Option value="34">+34</Option>
        <Option value="55">+55</Option>
    </Select>)

export default function Signup(props) {
        return (
            <MyContext.Consumer>
            {context => (
            <>
                {(!localStorage.user) ?
                    <div style= {
                        {
                            "backgroundColor" : "#79a7a3",
                            "width" : "100vw",
                            "height" : "100vh",
                            "display" : "flex",
                            "justifyContent" : "center",
                            "alignItems" : "center"
                        }}>
                        <div style={
                            {
                                "width" : "88vw",
                                "height" : "92vh",
                                "boder" : "2px solid #a7bdbb",
                                "borderRadius" : "10px",
                                "backgroundColor" : "#a7bdbb",
                                "display" : "flex",
                                "alignItems" : "center",
                                "flexDirection" : "column",
                                "boxShadow": "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
                            }}>
                            <div style={{"width": "70%","display" : "flex", "justifyContent" : "center", "alignItems": "center", "marginLeft": "-15vw"}}>
                                <Steps direction="vertical" size="small" current={context.formSignupStep} style={{"marginTop" : "2vh", "width": "25%"}}>
                                    <Step title="" />
                                    <Step title="" />
                                    <Step title="" />
                                </Steps>
                                <img src="logo_transparent.png" alt="Logo" style={{"width": "160px"}}/>
                            </div> 
                            <div style={{"width": "100%", "height" : "100%", "display" : "flex", "flexDirection" : "column","alignItems" : "center", "justifyContent" : "flex-start"}}>
                            {(context.formSignupStep === 0) ? 
                                <Form onSubmit={context.handleInput}>
                                    <Form.Item
                                        label={
                                            <span>
                                            Nombre completo&nbsp;
                                            <Tooltip title="Así te verán los demás usuarios">
                                                <Icon type="question-circle-o" />
                                            </Tooltip>
                                            </span>
                                        }
                                        >
                                        <Input 
                                        name="fullName" 
                                        type="text" 
                                        onChange={e => context.handleInput(e, 'formSignup')} 
                                        value={context.formSignup.fullName}/>
                                    </Form.Item>
                                    <Form.Item label="Password" hasFeedback>
                                        <Input.Password 
                                        name="password"
                                        type="password"
                                        onChange={e => context.handleInput(e, 'formSignup')}
                                        value={context.formSignup.password}
                                        />
                                    </Form.Item>
                                    <Button style={{"marginBottom" : "1vh", "backgroundColor": "black", "border": "2px solid black"}} onClick={context.nextStep1} type="primary" htmlType="submit">
                                        Siguiente
                                    </Button>
                                    <br></br>
                                    Ya tienes una cuenta?<Link to={"/login"}> Inicia sesión!</Link>
                                </Form>
                                :
                                (context.formSignupStep === 1) ?
                                    <Form onSubmit={context.handleInput}>
                                        <Form.Item label="Correo electrónico">
                                            <Input 
                                                type="email"
                                                name="email"
                                                onChange={e => context.handleInput(e, 'formSignup')}
                                                value={context.formSignup.email}
                                            />
                                        </Form.Item>
                                        <Form.Item label="Número de teléfono">
                                            <Input 
                                            addonBefore={prefixSelector} 
                                            style={{ width: '100%' }} 
                                            name="telephoneNumber" 
                                            onChange={e => context.handleInput(e, 'formSignup')}
                                            value={context.formSignup.telephoneNumber}
                                            />
                                        </Form.Item>
                                        <Form.Item label="Rol">
                                            <Select placeholder="Seleccione" style={{ width: 250 }} onChange={context.handleChangeRole}>
                                                <Option value="passenger">Pasajero</Option>
                                                <Option value="driver">Conductor</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label="Universidad">
                                            <Select placeholder="Seleccione" default="Tecnologico de Monterrey, Santa Fe"  style={{ width: 250 }} onChange={context.handleChangeUniversity}>
                                                <Option value="Tecnologico de Monterrey, Santa Fe">Tecnologico de Monterrey, Santa Fe</Option>
                                                <Option value="Universidad Iberoamericana">Universidad Iberoamericana</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item >
                                            
                                        </Form.Item>
                                        <Button style={{"backgroundColor": "black", "border": "2px solid black"}} onClick={context.nextStep2} type="primary" htmlType="submit">
                                            Siguiente
                                        </Button>
                                    </Form>
                                :
                                        (context.formSignup.role === "driver") ? 
                                            <Form style={{"width": "340px"}}>
                                            <div style={{"width":"100%", "display":"flex","justifyContent":"center"}}>
                                            <div style={{"display":"flex","flexDirection":"column", "width":"60%","alignItems":"center"}}>
                                            <Form.Item label="Modelo de su coche">
                                                <Input
                                                name="carModel" 
                                                type="text" 
                                                onChange={e => context.handleInput(e, 'formSignup')} 
                                                value={context.formSignup.carModel}/>
                                            </Form.Item>
                                            <Form.Item label="Color de su coche">
                                                <Input
                                                name="carColor" 
                                                type="text" 
                                                onChange={e => context.handleInput(e, 'formSignup')} 
                                                value={context.formSignup.carColor}/>
                                            </Form.Item>
                                            <Form.Item style={{"marginTop":"5vh"}}>
                                                <p>Suba una foto</p>
                                                <input onChange={context.handleFile} type="file" name="photo" />
                                            </Form.Item>
                                                <Button 
                                                style={{"backgroundColor": "black", "border": "2px solid black"}}
                                                type="primary" 
                                                htmlType="submit"
                                                onClick={(e) => context.handleSignupSubmit(e, () => props.history.push('/login'))}
                                                >
                                                    Finalizar
                                                </Button>
                                                </div>
                                                </div>
                                            </Form>
                                        :
                                            <Form style={{"width": "340px"}}>

                                            <Form.Item  style={{"marginTop":"5vh"}}>
                                                <p>Suba una foto</p>
                                                <input onChange={context.handleFile} type="file" name="photo" />
                                            </Form.Item>

                                            <Button 
                                                style={{"backgroundColor": "black", "border": "2px solid black"}}
                                                type="primary" 
                                                htmlType="submit"
                                                onClick={(e) => context.handleSignupSubmit(e, () => props.history.push('/login'))}
                                                >
                                                    Finalizar
                                                </Button>
                                            </Form>
                                            
                                        }       
                                        </div>
                        </div>
                    </div>
                    :
                    props.history.push("/rideChoice")
                    }
                </>
            )}
        </MyContext.Consumer>
        )

    }












