import React from "react";
import "./index.css";

function EpisodeList(props) {
  const { seasons } = props.serie;
  const capitulos = seasons.map((season, index) => {
    const episodes = season.episodes.map((episode, index) => {
      return (
        <div className="episode-container" key={index}>
          <div className="episode-image">
            <img src={episode.imgChapter}/><i className="fas fa-play-circle"></i>
          </div>
          <div className="episode-info">
            <div className="episode-title">{episode.title}</div>
            <div className="episode-description">{episode.description}</div>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment key={index}>
        <h3 className="capitulos-title">{season.name}</h3>
        {episodes}
      </React.Fragment>
    );
  });
  return (
    <div className="capitulos-wrapper">
      {capitulos}
    </div>
  );
}

export default EpisodeList;
