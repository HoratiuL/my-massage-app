import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="myheader">
        <div className="hd-title">Massage pleasure</div>
        <Button variant="outlined" className="hd-home">
          Home
        </Button>
        <Button variant="outlined" className="hd-serv">
          Servicii
        </Button>
        <Button variant="outlined" className="hd-book">
          Book
        </Button>
        <Button variant="outlined" className="hd-book">
          Contact
        </Button>
      </div>
    );
  }
}

export default Header;
