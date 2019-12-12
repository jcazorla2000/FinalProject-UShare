import React from 'react'
import {Link} from "react-router-dom"
import { MyContext } from '../../context'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css';
import AuthTemplate from './AuthTemplate';

export default function Login(props) {
        return (
            <MyContext.Consumer>
            {context => (
            <AuthTemplate >
            <div style={{"width": "100%", "height" : "100%", "display" : "flex", "alignItems" : "center", "justifyContent" : "center", "flexDirection" : "column"}}>
            <img style={{"width": "50vw", "marginTop": "-30vw", "marginBottom":"5vw"}} src="logo.png" alt="LogoImage"/>
            <Form onSubmit={context.handleInput} className="login-form">
              <Form.Item>
                
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="email"
                    name="email"
                    value={context.formLogin.email}
                    placeholder="Email"
                    onChange={e => context.handleInput(e, 'formLogin')}
                  />
              </Form.Item>
              <Form.Item>
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    name="password"
                    value={context.formLogin.password}
                    placeholder="Contraseña"
                    onChange={e => context.handleInput(e, 'formLogin')}
                  />
              </Form.Item>
              <Form.Item>
                <Checkbox>Recuerdame</Checkbox>
                <Button 
                style={{"backgroundColor": "#31837c", "border": "2px solid #31837c"}}
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
                onClick={e => {
                    context.handleLogin(e, () => props.history.push('/rideChoice') );
                }}
                >
                  Logearme
                </Button>
                No tienes una cuenta?
                    <Link to={"/signup"}> registrate ahora!</Link>
              </Form.Item>
            </Form>
            </div>
            </AuthTemplate>
            )}
          </MyContext.Consumer>
          )
}


