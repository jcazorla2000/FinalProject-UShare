import React from 'react'
import NavBar from '../NavBar'
import FooterLayout from '../Footer'



export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div style={{"height":"120vh", "backgroundColor":"#79a7a3","display":"flex","flexDirection":"column", "alignItems":"center"}}>
      <img style={{"border":"0 solid white", "borderRadius":"14px", "width": "300px", "margin":"1.5vh 0"}} src="/carpool.png" alt="CarpoolImage"/>
        <div style={{"width":"80%","textAlign":"justify"}}>
          <h1>¿Viajas solo?</h1>
          <h2>Comparte tu auto y mejora tus trayectos diarios</h2>
        </div>
        <img style={{"border":"0 solid white", "borderRadius":"14px", "width": "300px", "margin":"1.5vh 0"}} src="/carpool2.jpg" alt="CarpoolImage"/>
        <div style={{"width":"80%","textAlign":"justify"}}>
          <h2>¿Por qué compartir auto?</h2>
          <h3>Es una forma rápida, divertida y asequible de desplazarse. Ushare te permite elegir si quieres conducir o unirte a un viaje con otras personas que realizan la misma ruta que tú.</h3>
        </div>
        <hr></hr>
        <div style={{"width":"80%","textAlign":"justify"}}>
          <h2>Conoce a personas de tu misma universidad y comparte el costo del combustible</h2>
        </div>
      </div>
      <FooterLayout></FooterLayout>
    </div>
  )
}


