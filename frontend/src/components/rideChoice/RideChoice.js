import React from 'react'
import { Card } from 'antd';
import {Link} from "react-router-dom"
import AuthTemplate from '../auth/AuthTemplate';
import { MyContext } from '../../context'
import NavBar from '../NavBar';
import FooterLayout from '../Footer';

const { Meta } = Card;


export default function RideChoice(props) {
    return (
        <MyContext.Consumer>
        {context => (
        <>
        <NavBar></NavBar>
        <AuthTemplate>
        <div style={{"height" : "100%" ,"display" : "flex", "flexDirection" : "column", "justifyContent" : "space-around", "alignItems" : "center"}}>
            {(localStorage.user) ? (JSON.parse(localStorage.user).role === "driver") ? 
            <>
                <Link to={"/create"}>
                <Card
                    hoverable
                    style={{ "width": "300px", "height": "270px" , "border" : "6px solid white", "borderRadius" : "10px"}}
                    cover={<img alt="example" src="https://cnet2.cbsistatic.com/img/B7-zkuz2jA4PZDXw5VibK63Fbw4=/2018/11/08/8d5d245a-7f16-43e2-a885-d376734fbc95/uberpool-pr-photo.jpg" />}
                >
                    <Meta title="Ofrezca un viaje ahora" />
                </Card>
                </Link>
                <Link to={"/feed"}>
                <Card
                    hoverable
                    style={{ "width": "300px", "height": "270px"  , "border" : "6px solid white", "borderRadius" : "10px"}}
                    cover={<img alt="example" src="https://medici-prod.s3-us-west-2.amazonaws.com/uploads/challenges-opportunities-ride-sharing-industry.jpg" />}
                >
                    <Meta title="Busca un viaje ahora" />
                </Card>
                </Link>
            </>
            :
            <>
                <Link to={"/feed"}>
                <Card
                    hoverable
                    style={{ "width": "300px" , "height": "270px", "border" : "6px solid white", "borderRadius" : "10px"}}
                    cover={<img alt="example" src="https://medici-prod.s3-us-west-2.amazonaws.com/uploads/challenges-opportunities-ride-sharing-industry.jpg" />}
                >
                    <Meta title="Busca un viaje ahora" />
                </Card>
                </Link>
            </>
            :
            props.history.push("/login")
            }
        </div>
        </AuthTemplate>
        <FooterLayout></FooterLayout>
        </>
        )}
        </MyContext.Consumer>
    )
}
