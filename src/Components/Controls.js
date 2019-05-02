import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

export default function Controls() {
  return (
    <AppBar>
      <Toolbar>
        <Typography color="inherit" variant="headline">
          Blissful massage
        </Typography>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to={"/packageList"}>
          <Button>Listing</Button>
        </Link>
        <Link to={"/tabs"}>
          <Button>Tabs</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
