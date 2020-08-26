import React from "react";
import "./index.css";
import Progress from "../Progress";
import { Link } from "react-router-dom";

class Carousel extends React.Component {
  render() {
    const series = this.props.series.map((serie, index) => {
      const progress =
        serie.progress != null ? <Progress progress={serie.progress} /> : null;
      return (
        <Link
          to={`/detail/${this.props.type}/${index}`}
          key={index}
          className="serie"
        >
          <img src={serie.imgCarousel} alt={serie.title} />
          {progress}
        </Link>
      );
    });


    return (
      <div className="series-wrapper">
        <h3 className="series-title">{this.props.title}</h3>
        <div className="series">{series}</div>
      </div>
    );
  }
}

export default Carousel;
