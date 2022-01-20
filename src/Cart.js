import React, { useEffect, useState, memo } from "react";
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
      <Parent 이름="k9want" 나이="20대"></Parent>
    </div>
  );
}

function Parent(props) {
  return (
    <div>
      <Child1 이름={props.이름}></Child1>
      <Child2 나이={props.나이}></Child2>
    </div>
  );
}

function Child1() {
  useEffect(() => {
    console.log("렌더링됨1");
  });
  return <div>memo( ) - example1</div>;
}

// memo() 사용
// 하지만 단점이 있다. 기존 props와 바뀐 props 비교연산후 컴포넌트 업데이트할지 말지 결정하기에 props가 크고 복잡한 경우에는 이거로도 부담이 될수 있다.
let Child2 = memo(function () {
  useEffect(() => {
    console.log("렌더링됨2");
  });
  return <div>memo( ) - example2</div>;
});

// 옛날 문법
// function state를props화(state) {
//   return {
//     state: state.reducer,
//     alertState: state.reducer2,
//   };
// }
// export default connect(state를props화)(Cart);

export default Cart;
