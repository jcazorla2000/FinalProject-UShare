import React from 'react'
import NavBar from '../NavBar'
import FooterLayout from '../Footer'
import { Carousel } from 'antd';

import "./home.css"


export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div style={{"height":"90vh", "backgroundColor":"#31837c"}}>
      <Carousel >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
        <div>
          <h1>¿Viajas solo?</h1>
          <h1>Comparte tu auto y mejora tus trayectos diarios</h1>
        </div>
        <div>
          <h2>¿Por qué compartir auto?</h2>
          <h4>Es una forma rápida, divertida y asequible de desplazarse. Ushare te permite elegir si quieres conducir o unirte a un viaje con otras personas que realizan la misma ruta que tú.</h4>
        </div>
        <div>
          <h2>Conoce a personas de tu misma universidad</h2>
        </div>
        <div>
          <h2>Comparte el costo del combustible</h2>
        </div>
      </div>
      <FooterLayout></FooterLayout>
    </div>
  )
}


