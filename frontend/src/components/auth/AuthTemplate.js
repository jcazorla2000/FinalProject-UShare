import React from 'react'

export default function AuthTemplate(props) {
    return (
        <div style= {
            {
                // "backgroundImage" : "url('https://image.freepik.com/free-vector/city-background-design_1300-365.jpg')",
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
                {props.children}
            </div>
        </div>
    )
}
