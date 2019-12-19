import React from 'react'

export default function AuthTemplate(props) {
    return (
        <div style= {
            {
                "backgroundColor" : "#79a7a3",
                "width" : "100vw",
                "height" : "90vh",
                "display" : "flex",
                "justifyContent" : "center",
                "alignItems" : "center"
            }}>
            <div style={
                {
                    "width" : "88vw",
                    "height" : "92vh",
                    "display" : "flex",
                    "alignItems" : "center",
                    "flexDirection" : "column"
                }}>
                {props.children}
            </div>
        </div>
    )
}
