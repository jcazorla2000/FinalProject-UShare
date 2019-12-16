import React from 'react'
import 'antd/dist/antd.css';
import {Link} from "react-router-dom"
import styled from "styled-components"
import './navbar.css';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const StyledNav = styled.nav`
    width: 100%;
    background-color: #a7bdbb;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function NavBar() {
    return (
        <StyledNav>
            <img style={{"width": "70px", "marginRight" : "-6vw", "marginTop" : "1.3vh"}} alt="logoimage" src="logo_transparent.png" />
            <Link style={{"marginTop" : "2vh", "marginLeft": "4.5vw"}} to={"/rideChoice"}><h2>UShare</h2></Link>
            {/* <Link to={"/profile"} style={{"marginRight": "4vw"}}><Avatar shape="square" size="medium" icon="user" /></Link> */}
            <Menu style={{"backgroundColor": "#a7bdbb"}} mode="horizontal">
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                        <Icon type="setting" />
                        Menú
                        </span>
                    }
                    >
                    <Menu.ItemGroup title="">
                        <Menu.Item key="Perfil"><Link to={"/profile"} style={{"marginRight": "4vw"}}><p>Perfil</p></Link></Menu.Item>
                        <Menu.Item key="MisViajes"><Link to={"/myRides"} style={{"marginRight": "4vw"}}><p>Mis viajes</p></Link></Menu.Item>
                        <Menu.Item key="BuscarViajes"><Link to={"/feed"} style={{"marginRight": "4vw"}}><p>Buscar viaje</p></Link></Menu.Item>
                        {(localStorage.user) ? (JSON.parse(localStorage.user).role === "driver") ? <Menu.Item key="Crear"><Link to={"/create"} style={{"marginRight": "4vw"}}><p>Nuevo viaje</p></Link></Menu.Item> : null : null}
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        </StyledNav>
    )
}
