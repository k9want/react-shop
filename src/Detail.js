import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let shoeId = props.shoes.find(shoe => shoe.id == id);
  console.log(shoeId);
  let history = useHistory();

  return (
    <div className="container">
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

export default Detail;
