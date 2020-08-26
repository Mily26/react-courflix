import React from "react";
import "./index.css";
import Thumbs from "../Thumbs";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isMobile: window.innerWidth < 768};
  }

  updateMobile = () => {
    this.setState({isMobile: window.innerWidth < 768});
  }

  componentDidMount() {
    window.addEventListener("resize",this.updateMobile)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMobile)
  }

  render() {
    const { hero } = this.props;
    const infoStyles = this.props.isDetail || this.state.isMobile ? {} : { display: "none" };
    const buttonStyles = this.props.isDetail
      ? { backgroundColor: "#ED0A1D" }
      : {};
    const bannerStyles = {
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%), url("${hero.imgPortada}")`,
    };
    const thumbs = this.props.isDetail ? <Thumbs /> : null;
    const info = hero.info.split("-");
    const titleStyles = hero.longTitle ? {fontSize: "84px", width: "10em"} : {};
    return (
      <div className="banner" style={bannerStyles}>
        <h3>{hero.subtitle}</h3>
        <h1 style={titleStyles}>{hero.title}</h1>
        <div className="info" style={infoStyles}>
          <p>
            <span className="coincidence">{info[0]}</span>
            <span className="year">{info[1]}</span>
            <span className="rating">{info[2]}</span>
            <span className="season-count">{info[3]}</span>
          </p>
        </div>
        <button className="play" style={buttonStyles}>
          Reproducir
        </button>
        <button className="list">+ mi lista</button>
        {thumbs}
        <h4>{hero.season}</h4>
        <p className="description">{hero.description}</p>
      </div>
    );
  }
}

export default Hero;
