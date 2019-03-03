import React, { Component } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core/";
// import "./Header.css";

class Header extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography variant="H2" color="inherit">
            Blissful massage
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
