import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
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
            <th>설명</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map(shoe => {
            return (
              <tr>
                <td>{shoe.id}</td>
                <td>{shoe.name ? shoe.name : shoe.title}</td>
                <td>{shoe.content}</td>
                <td>{shoe.price}원</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

function state를props화(state) {
  return {
    state: state,
  };
}
export default connect(state를props화)(Cart);

// export default Cart;
