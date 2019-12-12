import React from 'react'
import 'antd/dist/antd.css';
import {Link} from "react-router-dom"
import styled from "styled-components"
import { Avatar } from 'antd';

const StyledNav = styled.nav`
    width: 100%;
    background-color: #a7bdbb;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

`

export default function NavBar() {
    return (
        <StyledNav>
            <img style={{"width": "70px", "marginRight" : "-6vw", "marginTop" : "1.3vh"}} alt="logoimage" src="logo_transparent.png" />
            <Link style={{"marginTop" : "2vh"}} to={"/rideChoice"}><h2>UShare</h2></Link>
            <Link to={"/profile"} style={{"marginRight": "4vw"}}><Avatar shape="square" size="medium" icon="user" /></Link>
        </StyledNav>
    )
}
