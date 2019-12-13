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
`

export default function NavBar() {
    return (
        <StyledNav>
            <img style={{"width": "70px", "marginRight" : "-6vw", "marginTop" : "1.3vh"}} alt="logoimage" src="logo_transparent.png" />
            <Link style={{"marginTop" : "2vh", "marginLeft": "4.5vw"}} to={"/rideChoice"}><h2>UShare</h2></Link>
            <Link to={"/profile"} style={{"marginRight": "4vw"}}><Avatar shape="square" size="medium" icon="user" /></Link>
        </StyledNav>
    )
}
