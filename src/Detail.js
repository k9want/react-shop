import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

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

      {inputData}
      <input
        onChange={e => {
          inputDataState(e.target.value);
        }}
      />

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
          <button className="btn btn-outline-secondary detail-btn">
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
    </div>
  );
}

function Alert(props) {
  return (
    <div className="shoe-alert">
      <p>재고가 얼마 남지 않았습니다. </p>
    </div>
  );
}

export default Detail;
