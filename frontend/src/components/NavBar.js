import React from 'react'
import 'antd/dist/antd.css';
import {Link} from "react-router-dom"
import styled from "styled-components"
import './navbar.css';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const StyledNav = styled.nav`
    width: 100%;
    ${'' /* background-color: #a7bdbb; */}
    background-color: black;
    color: white!important;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        color: white;
    }
`

export default function NavBar() {
    return (
        <StyledNav>
            <img style={{"width": "70px", "marginRight" : "-6vw", "marginTop" : "1.3vh"}} alt="logoimage" src="logo_transparent.png" />
            <Link style={{"marginTop" : "2vh", "marginLeft": "4.5vw", "color": "white"}} to={"/rideChoice"}><h2>UShare</h2></Link>
            {/* <Link to={"/profile"} style={{"marginRight": "4vw"}}><Avatar shape="square" size="medium" icon="user" /></Link> */}
            <Menu style={{"backgroundColor": "black"}} mode="horizontal">
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                        <Icon style={{"backgroundColor":"none",fontSize : "26px", color: "white", "border": "0 solid black", "marginTop": "2vh"}} type="menu" />
                        
                        </span>
                    }
                    >
                    <Menu.ItemGroup style={{"marginTop":"-20px"}} title="">
                        {(localStorage.user) ? 
                        <Menu.ItemGroup title="">
                            <Menu.Item key="Perfil"><Link to={"/profile"} style={{"marginRight": "4vw"}}><p><Icon type="user" />Perfil</p></Link></Menu.Item>
                            <Menu.Item key="MisViajes"><Link to={"/myRides"} style={{"marginRight": "4vw"}}><p><Icon type="car" />Mis viajes</p></Link></Menu.Item>
                            <Menu.Item key="BuscarViajes"><Link to={"/feed"} style={{"marginRight": "4vw"}}><p><Icon type="search" />Buscar viaje</p></Link></Menu.Item>
                        </Menu.ItemGroup>
                        :
                        <Menu.ItemGroup title="">
                            <Menu.Item key="Iniciar sesión"><Link to={"/login"} style={{"marginRight": "4vw"}}><p>Iniciar sesión</p></Link></Menu.Item>
                            <Menu.Item key="Registrarme"><Link to={"/signup"} style={{"marginRight": "4vw"}}><p>Registrarme</p></Link></Menu.Item>
                        </Menu.ItemGroup>
                        }
                        {(localStorage.user) ? (JSON.parse(localStorage.user).role === "driver") ? <Menu.Item key="Crear"><Link to={"/create"} style={{"marginRight": "4vw"}}><p><Icon type="plus-circle" />Nuevo viaje</p></Link></Menu.Item> : null : null}
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        </StyledNav>
    )
}
