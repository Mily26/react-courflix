import React from "react";
import Hero from "../../components/Hero";
import series from "../../data/series.json";
import continu from "../../data/continue.json";
import recently from "../../data/new.json";
import { useParams } from "react-router-dom";
import EpisodeList from '../../components/EpisodeList';
import './index.css';

function Detail() {
  let {type, serieId} = useParams();
  let group;
  if(type === "series") {
    group = series.series;

  } else if (type === "continue") {
    group = continu.series;
  } else if (type === "new") {
    group = recently.series;
  }
  const serie = group[serieId];
  return (
    <div className="Detail">
      <Hero isDetail={true} hero={serie} />
      <EpisodeList serie={serie} />
    </div>
  );
}

export default Detail;
