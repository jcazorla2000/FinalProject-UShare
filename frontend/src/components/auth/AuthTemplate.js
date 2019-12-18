import React from 'react'

export default function AuthTemplate(props) {
    return (
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
                    // "boder" : "2px solid #a7bdbb",
                    // "borderRadius" : "10px",
                    // "backgroundColor" : "#a7bdbb",
                    "display" : "flex",
                    "alignItems" : "center",
                    "flexDirection" : "column",
                    // "boxShadow": "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
                }}>
                {props.children}
            </div>
        </div>
    )
}
