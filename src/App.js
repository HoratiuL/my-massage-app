import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Controls from "./Components/Controls";
import Header from "./Components/Header";
import CoverflowPack from "./Components/CoverflowPack";
import BootstrapCarouselPack from "./Components/BootstrapCarouselPack";
import SlickCarousel from "./Components/SlickCarousel";
import Servicii from "./Components/Servicii";
import BStab from "./Components/BStab";
import PackageList from "./Components/PackageList";
import Home from "./Components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mycards: [],
      mymassages: []
    };
  }

  componentWillMount() {
    axios.get("http://localhost:5000/mycards").then(Object => {
      this.setState({ mycards: Object.data });
    });
    axios.get("http://localhost:5000/mymassages").then(response => {
      this.setState({ mymassages: response.data });
    });
  }

  render() {
    return (
      // <div className="App">
      //   <Header />
      //   <Antet />
      //   {/* <CoverflowPack /> */}
      //   {/* <BootstrapCarouselPack /> */}
      //   <SlickCarousel />
      //   {/* Version 1  */}
      //   {/* <Servicii mymassages={this.state.mymassages} /> */}
      //   {/* Version 2 */}
      //   <BStab mymassages={this.state.mymassages} />
      //   {/* Version 3 */}
      //   {/* <PackageList /> */}
      // </div>
      <div>
        <Router>
          <Controls />
          <Switch>
            <div style={{ marginTop: "5%" }}>
              <Route exact path="/" component={Home} />
              <Route path="/packageList" component={PackageList} />
              <Route
                path="/tabs"
                render={props => <BStab mymassages={this.state.mymassages} />}
              />
            </div>
          </Switch>
        </Router>
        <Header />
      </div>
    );
  }
}

export default App;
