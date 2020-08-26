import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {menuOpen:false}
  }
  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }
  render() {
    const menuClass = this.state.menuOpen ? "titles" : "titles menu-close";
    return (
      <div className="container">
        <div className="title">
          <i className="fas fa-bars" onClick={this.toggleMenu.bind(this)}></i>
          <img src="./images/titulo.png" />
          <div className={menuClass}>
            <Link to="/">Inicio</Link>
            <a href="#">Series</a>
            <a href="#">Películas</a>
            <a href="#">Agregados Recientemente</a>
            <a href="#">Mi lista</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
