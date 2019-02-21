import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
// import Main from "./Components/Main";
import Servicii from "./Components/Servicii";
import ServiciiList from "./Components/ServiciiList";
import ServPack from "./Components/ServPack";
import CoverflowPack from "./Components/CoverflowPack";
import BootstrapCarouselPack from "./Components/BootstrapCarouselPack";
import SlickCarousel from "./Components/SlickCarousel";

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
      // console.log(response);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <CoverflowPack /> */}
        {/* <BootstrapCarouselPack /> */}
        <SlickCarousel />
        {/* <Main mycards={this.state.mycards} /> */}
        {/* <ServPack mymassages={this.state.mymassages} /> */}
        {/* <BSaccordion mymassages={this.state.mymassages} /> */}
        <Servicii mymassages={this.state.mymassages} />

        {/* ServiciiList trebuie sa-l fac sa se inchida un tab cand se deschide altul
        si apoi sa introduc in panel o imagine */}
        {/* <ServiciiList mymassages={this.state.mymassages} /> */}
      </div>
    );
  }
}

export default App;
