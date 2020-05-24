import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, Col } from "react-bootstrap";
import { FaYoutube, FaSearch } from "react-icons/fa";
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
      <Container>
        {/* <Row> */}
        <Navbar bg="light" expand="lg">
          <Col>
            <Navbar.Brand href="#home">
              {" "}
              <FaYoutube /> MyTube
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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Navbar>
        {/* </Row> */}
      </Container>
    );
  }
}
export default NavbarComponent;
