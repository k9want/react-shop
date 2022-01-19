import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { connect, useSelector } from "react-redux";

function Cart(props) {
  let [count, countState] = useState(false);

  // 최신 문법
  let state = useSelector(state => state.reducer);
  // console.log(state.reducer);
  let dispatch = useDispatch();

  return (
    <div>
      {/* {props.state.map(shoe => {
        console.log(shoe.id);
      })} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>index</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {state.map((shoe, i) => {
            return (
              <tr key={i}>
                <td>{shoe.id}</td>
                <td>{shoe.name ? shoe.name : shoe.title}</td>
                <td>{shoe.quan}</td>
                <td>{shoe.price}원</td>
                <td>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      if (props.info[i] > 0) {
                        dispatch({
                          type: "수량증가",
                          payload: { id: i },
                        });
                        let infoCopy = [...props.info];
                        infoCopy[i]--;
                        props.infoState(infoCopy);
                        // console.log(props.infoCopy);
                      } else {
                        alert(`현재 해당 상품의 수량이 더 없습니다.`);
                      }
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      dispatch({
                        type: "수량감소",
                        payload: { id: i, quan: shoe.quan },
                      });
                      let infoCopy = [...props.info];
                      infoCopy[i]++;
                      props.infoState(infoCopy);
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alertState === true ? (
        <div className="shoe-alert">
          <p>지금 구매하시면 신규할인 15%</p>
          <br />
          <button
            className="btn btn-outline-secondary"
            onClick={() => props.dispatch({ type: "닫기" })}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}
// 옛날 문법
// function state를props화(state) {
//   return {
//     state: state.reducer,
//     alertState: state.reducer2,
//   };
// }
// export default connect(state를props화)(Cart);

export default Cart;
