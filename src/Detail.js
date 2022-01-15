import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

import { CSSTransition } from "react-transition-group";

import styled from "styled-components";
import "./Detail.scss";
import { infoContext } from "./App";

let 박스 = styled.div`
  padding-top: 30px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${props => props.색상};
`;

function Detail(props) {
  let [alertShow, alertShowState] = useState(true);
  let [inputData, inputDataState] = useState("");
  let info = useContext(infoContext);
  let [checkTab, checkTabState] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      alertShowState(false);
      console.log("확인");
      return () => {
        console.log("뒷정리");
        clearTimeout(timer);
      };
    }, 2000);
  }, [alertShow]);

  let { id } = useParams();
  let shoeId = props.shoes.find(shoe => shoe.id == id);
  // console.log(shoeId);
  let history = useHistory();

  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
        {/* <제목 색상="blue">Detail</제목> */}
      </박스>

      {/* {inputData}
      <input
        onChange={e => {
          inputDataState(e.target.value);
        }}
      /> */}

      {alertShow === true ? <Alert /> : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoeId.title}</h4>
          <p>{shoeId.content}</p>
          <p>{shoeId.price}원</p>

          <Info info={props.info}></Info>

          <button
            className="btn btn-outline-secondary detail-btn"
            onClick={() => props.infoState([9, 4, 6])}
          >
            주문하기
          </button>
          <button
            className="btn btn-outline-secondary detail-btn"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              스위치변경(false);
              checkTabState(0);
            }}
          >
            상품설명
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              checkTabState(1);
            }}
          >
            배송정보
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames="wow" timeout={1000}>
        <TabContent checkTab={checkTab} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.checkTab === 0) {
    return <div>0번째 내용입니다. </div>;
  } else if (props.checkTab === 1) {
    return <div>1번째 내용</div>;
  } else if (props.checkTab === 2) {
    return <div>2번째 내용입니다.</div>;
  }
}

function Info(props) {
  return <p>재고 : {props.info[0]}</p>;
}

function Alert(props) {
  return (
    <div className="shoe-alert">
      <p>재고가 얼마 남지 않았습니다. </p>
    </div>
  );
}

export default Detail;
