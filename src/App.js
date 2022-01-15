import React, { useContext, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import shoesData from "./data";
import Detail from "./Detail";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import Cart from "./Cart";

export let infoContext = React.createContext();

function App() {
  let [shoes, shoesState] = useState(shoesData);
  let [info, infoState] = useState([10, 4, 6, 5, 6, 8]);
  let [loading, loadingState] = useState(false);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail/0">
                Detail
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
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
      <infoContext.Provider value={info}>
        <Switch>
          <Route exact path="/">
            <Main
              shoes={shoes}
              shoesState={shoesState}
              loading={loading}
              loadingState={loadingState}
            />
          </Route>

          <Route path="/detail/:id">
            <infoContext.Provider value={info}>
              <Detail shoes={shoes} info={info} infoState={infoState} />
            </infoContext.Provider>
          </Route>

          <Route path="/cart">
            <Cart></Cart>
          </Route>

          <Route path="/:id">
            <h4>
              <br />
              해당 상품이 존재하지 않습니다.
              <br />
              상품번호를 확인해주세요
            </h4>
          </Route>

          {/* <Route path="/card" component={Image}></Route> */}
        </Switch>
      </infoContext.Provider>
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

        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            // axios.post("서버 URL", { id: "qma", pw: 1234 });

            props.loadingState(true);
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then(result => {
                // console.log(result.data);
                // let newShoes = [...props.shoes];
                // newShoes.push(...result.data);
                // props.shoesState(newShoes);
                props.loadingState(false);

                props.shoesState([...props.shoes, ...result.data]);
              })
              .catch(error => {
                console.log(error);
              }); // 서버에 get요청하는 코드 axios.get(데이터 요청할 URL)
          }}
        >
          더보기
        </button>
        {props.loading === true ? (
          <div>
            <h4>로딩중.....</h4>
          </div>
        ) : null}
      </div>
    </>
  );
}

function Card(props) {
  let info = useContext(infoContext);

  return (
    <div className="col-md-4">
      <a href={`./detail/${props.shoes.id}`}>
        <img
          src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
          width="100%"
        />
        <h4>{props.shoes.title}</h4>
        <p>
          {props.shoes.content} & {props.shoes.price}원
        </p>
        <p>재고 : {info[props.i]}</p>
      </a>
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
