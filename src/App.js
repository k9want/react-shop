import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import shoesData from "./data";
import Detail from "./Detail";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoesState] = useState(shoesData);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
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
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Main shoes={shoes} />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때는 이게 보여진다.</div>
        </Route>

        {/* <Route path="/card" component={Image}></Route> */}
      </Switch>
    </div>
  );
}

function Main(props) {
  return (
    <>
      <div className="App-Main">
        <h1>30% Seanson Off</h1>
        <p>This is a simple</p>
        <button className="btn btn-outline-light btn-lg"> Learn More </button>
      </div>

      <div className="container">
        <div className="row">
          {props.shoes.map((shoe, i) => {
            return <Card shoes={shoe} i={i} />;
          })}
        </div>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

// function Image() {
//   return (
//     <div className="col-md-4">
//       <img
//         src={`https://codingapple1.github.io/shop/shoes1.jpg`}
//         width="100%"
//       />
//     </div>
//   );
// }

export default App;
