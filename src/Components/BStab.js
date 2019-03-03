import React, { Component } from "react";
import {
  Tabs,
  Nav,
  Col,
  Row,
  Tab,
  NavItem,
  Image,
  NavLink,
  TabPane,
  TabContainer,
  TabContent
} from "react-bootstrap";
import { Paper } from "@material-ui/core";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";

class BStab extends Component {
  constructor(props) {
    super();
    this.state = {
      // activeEventKey: props.activeEventKey || 1,
      activeKey: "",
      key: "Masaj relaxare"
    };
  }

  handleSelect = (e, eventKey) => {
    console.log("test");
    this.setState({ activeEventKey: eventKey });
  };

  handlePanelActive = (e, item) => {
    const { index } = item;
    const { activeKey } = this.state;
    const newIndex = activeKey === index ? -1 : index;
    console.log("here");
    this.setState({ activeKey: newIndex });
    console.log("after");
  };

  handleDefault = () => {
    <img alt="" src="./images/massage1.jpg" />;
  };

  handleTab = key => {
    this.setState({ key });
    console.log(key);
  };

  render() {
    const { mymassages = [] } = this.props;
    const { activeEventKey, activeKey } = this.state;

    return (
      <div>
        {/* <TabContainer
          id="toggle left-tabs-example"
          defaultActivekey={0}
          // activeKey={activeKey}
          // onSelect={this.handlePanelActive}
        >
          {mymassages.map((item, index) => (
            <Row>
              <Col sm={4}>
                <Nav
                  variant="pills"
                  className="flex-column"
                  onSelect={activeKey => this.setState({ activeKey })}
                >
                  <NavItem>
                    <Nav.Link eventKey={activeKey}>{item.title}</Nav.Link>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={8}>
                <TabContent>
                  <TabPane eventKey={activeKey}>{item.jobDescription}</TabPane>
                </TabContent>
              </Col>
            </Row>
          ))}
        </TabContainer> */}

        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          defaultActiveKey={this.handleDefault}
          onSelect={this.handleTab}
          className="nav nav-pills nav-stacked nav-justified"
        >
          {mymassages.map(item => (
            <Tab eventKey={item.title} title={item.title} className="">
              <Row>
                <Col sm={6}>
                  <Paper> {item.jobDescription}</Paper>
                </Col>
                <Col sm={6}>
                  <Image
                    src={item.poster}
                    alt=""
                    className=" img-thumbnail"
                    // thumbnail={true}
                    // fluid={true}
                  />
                </Col>
              </Row>
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default BStab;
