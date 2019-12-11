import React from 'react'
import { Steps } from 'antd';
import { MyContext } from '../../context'
import {Link} from "react-router-dom"
import moment from 'moment';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    // Cascader,
    Select,
    Button,
    TimePicker
  } from 'antd';
const { Step } = Steps;
const { Option } = Select;
const format = 'HH:mm';

const prefixSelector = (
    <Select placeholder="+55" style={{ width: 70 }}>
        <Option value="34">+34</Option>
        <Option value="55">+55</Option>
    </Select>)

export default function Signup(props) {
        return (
            <MyContext.Consumer>
            {context => (
                <div style= {
                    {
                        // "background-image" : "url('https://miro.medium.com/max/3300/1*8ZGC79f70ZpDbwrhYha-xA.png')",
                        // "backgroundImageSize" : "contain",
                        "backgroundColor" : "black",
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
                            "boder" : "2px solid whiteSmoke",
                            "borderRadius" : "10px",
                            "backgroundColor" : "whiteSmoke",
                            "display" : "flex",
                            "alignItems" : "center",
                            "flexDirection" : "column"

                        }}>
                        <Steps size="small" current={context.formSignupStep} style={{"marginTop" : "10vh", "marginLeft" : "12vw"}}>
                            <Step title="Primer paso" />
                            <Step title="Segundo paso" />
                            <Step title="Tercer paso" />
                        </Steps>   
                        <div style={{"width": "100%", "height" : "100%", "display" : "flex", "flexDirection" : "column","alignItems" : "center", "justifyContent" : "center"}}>
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
                                <Button style={{"marginBottom" : "1vh"}} onClick={context.nextStep} type="primary" htmlType="submit">
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
                                    <Select placeholder="Seleccione" style={{ width: 250 }} onChange={context.handleChangeRole}>
                                        <Option value="passenger">Pasajero</Option>
                                        <Option value="driver">Conductor</Option>
                                    </Select>
                                    <br></br>
                                    <br></br>
                                    <Select placeholder="Seleccione" default="Tecnologico de Monterrey, Santa Fe"  style={{ width: 250 }} onChange={context.handleChangeUniversity}>
                                        <Option value="Tecnologico de Monterrey, Santa Fe">Tecnologico de Monterrey, Santa Fe</Option>
                                        <Option value="Universidad Iberoamericana">Universidad Iberoamericana</Option>
                                    </Select>
                                    <Form.Item >
                                        
                                    </Form.Item>
                                    <Button onClick={context.nextStep} type="primary" htmlType="submit">
                                        Siguiente
                                    </Button>
                                </Form>
                            :
                                    (context.formSignup.role === "driver") ? 
                                        <Form>
                                        <Form.Item>
                                            <TimePicker defaultValue={moment('12:08', format)} format={format} onChange={context.handleChangeDeparture}/>
                                            {/* <TimePicker 
                                                placeholder="Salida" 
                                                name="departure" 
                                                onChange={context.handleChangeDeparture}
                                            /> */}
                                        </Form.Item>
                                        <Form.Item>
                                            <TimePicker defaultValue={moment('12:08', format)} format={format} onChange={context.handleChangeReturn}/>
                                            {/* <TimePicker 
                                                placeholder="Regreso" 
                                                name="return" 
                                                onChange={context.handleChangeReturn}
                                            /> */}
                                        </Form.Item>
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
                                                <Button 
                                            
                                            type="primary" 
                                            htmlType="submit"
                                            onClick={e => {
                                                context.handleSignup(e)
                                                props.history.push('/login')
                                            }}
                                            >
                                                Finalizar
                                            </Button>
                                        </Form>
                                    :
                                        <Form>
                                        <Form.Item>
                                        
                                        <TimePicker 
                                            placeholder="Salida" 
                                            name="departure" 
            
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <TimePicker 
                                            placeholder="Regreso" 
                                            name="return" 
                                            
                                        />
                                        </Form.Item>
                                        <Button 
                                       
                                            type="primary" 
                                            htmlType="submit"
                                            onClick={e => {
                                                context.handleSignup(e)
                                                props.history.push('/login')
                                            }}
                                            >
                                                Finalizar
                                            </Button>
                                        </Form>
                                    }         
                                    </div>
                    </div>
                </div>
            )}
        </MyContext.Consumer>
        )
    }


{/* <Form.Item label="Horario habitual">
                                        <TimePicker 
                                        placeholder="Salida" 
                                        name="departure" 
                                        onChange={e => context.handleInput(e, 'formSignup')}
                                        value={context.formSignup.departure}
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <TimePicker 
                                        placeholder="Regreso" 
                                        name="return" 
                                        onChange={e => context.handleInput(e, 'formSignup')}
                                        value={context.formSignup.return}
                                        />
                                    </Form.Item>
                                    <Form.Item label="Universidad">
                                        <Cascader 
                                        options={universities} 
                                        placeholder="seleccione" 
                                        name="university" 
                                        onChange={e => context.handleInput(e, 'formSignup')}
                                        value={context.formSignup.university}
                                        />
                                    </Form.Item> */}











