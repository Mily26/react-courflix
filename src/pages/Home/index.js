import React from 'react';
import Hero from '../../components/Hero'
import Carousel from '../../components/Carousel'
import series from '../../data/series.json'
import continu from '../../data/continue.json'
import recently from '../../data/new.json'
import './index.css';
import hero from '../../data/hero.json'

function Home() {
  return (
    <div className="Home">
      <Hero hero={hero}/>
      <Carousel title="Series" series={series.series} type="series"/>
      <Carousel title="Seguir viendo el contenido de Mily" series={continu.series} type="continue"/>
      <Carousel title="Agregados recientemente" series={recently.series} type="new"/>
    </div>
  );
}

export default Home;