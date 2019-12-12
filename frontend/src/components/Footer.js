import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import {Layout} from 'antd';
const { Footer} = Layout;

export default function FooterLayout() {
    return (
        <div>
            <Footer style={{ textAlign: 'center', "backgroundColor": "#265652", "color" : "white" }}>UShare ©2019 Creado por José Manuel Cazorla Gómez</Footer>
        </div>
    )
}
