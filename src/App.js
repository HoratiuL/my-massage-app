import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Servicii from "./Components/Servicii";

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
      console.log(response);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main mycards={this.state.mycards} />
        <Servicii mymassages={this.state.mymassages} />
      </div>
    );
  }
}

export default App;
