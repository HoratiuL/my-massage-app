import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Antet from "./Components/Antet";
import CoverflowPack from "./Components/CoverflowPack";
import BootstrapCarouselPack from "./Components/BootstrapCarouselPack";
import SlickCarousel from "./Components/SlickCarousel";
import Servicii from "./Components/Servicii";
import BStab from "./Components/BStab";
import PackageList from "./Components/PackageList";

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
      <div className="App">
        <Header />
        <Antet />
        {/* <CoverflowPack /> */}
        {/* <BootstrapCarouselPack /> */}
        <SlickCarousel />
        {/* Version 1  */}
        {/* <Servicii mymassages={this.state.mymassages} /> */}
        {/* Version 2 */}
        <BStab mymassages={this.state.mymassages} />
        {/* Version 3 */}
        {/* <PackageList /> */}
      </div>
    );
  }
}

export default App;
