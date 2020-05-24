import React, { Component } from "react";
import { Navbar, Nav, Col } from "react-bootstrap";
import { FaYoutube, FaSearch, FaBell, FaHome } from "react-icons/fa";
// import SearchBar from "../SearchBar/SearchBar";

class NavbarComponent extends Component {
  state = {
    inputData: "",
  };
  onInputChanged = (event) => {
    this.setState({ inputData: event.target.value });
    // console.log(inputData);
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.inputData);
    //TODO: Make sure you call this function
    // callback from parent component
  };
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Col>
          <Navbar.Brand href="#home">
            {" "}
            <FaYoutube color={"red"} size={29} /> MyTube
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Col>
        <Col xs={6}>
          <div>
            <form
              onSubmit={this.onFormSubmit}
              className="form-inline d-flex justify-content-center md-form form-sm active-pink-2 mt-2"
            >
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                aria-label="Search"
                onChange={this.onInputChanged}
                value={this.state.inputData}
                placeholder="Search"
              />
              <button onClick={this.onFormSubmit}>
                <FaSearch />
              </button>
            </form>
          </div>
        </Col>
        <Col>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">
                {" "}
                <FaHome size={29} color={"red"} />{" "}
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <FaBell size={29} color={"red"} />{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    );
  }
}
export default NavbarComponent;
