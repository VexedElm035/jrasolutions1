import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"software"} heading={"Software mas vendido"}/>
      <HorizontalCardProduct category={"procesadores"} heading={"Procesadores"}/>
      <VerticalCardProduct category={"computadoras"} heading={"Computadoras"}/>
      <VerticalCardProduct category={"tarjetasvid"} heading={"Tarjetas de Video"}/>
      <VerticalCardProduct category={"almacenamiento"} heading={"Almacenamiento"}/>
      <VerticalCardProduct category={"gabinetes"} heading={"Gabinetes"}/>
      <VerticalCardProduct category={"monitores"} heading={"Monitores"}/>
      
      <VerticalCardProduct category={"componentes"} heading={"Componentes"}/>
      <VerticalCardProduct category={"teclados"} heading={"Teclados"}/>
      <VerticalCardProduct category={"motherboard"} heading={"Tarjetas Madre"}/>
    </div>
  )
}

export default Home