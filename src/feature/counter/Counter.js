import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from "./counterSlice";
import { Button } from "antd";
import { useState } from "react";
import FoodList from "../../components/FoodList";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <>
      <div className="d-flex mt-5 justify-content-between">
        <div className="me-5">
          <h1>{count}</h1>
          <Button onClick={() => dispatch(increment())} className="me-2">
            Increment Value
          </Button>
          <Button onClick={() => dispatch(decrement())}>
            Decrement Value
          </Button>
        </div>
        <FoodList />
      </div>
      {/* <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <input
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <Button
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmount) || 0))
        }
      >
        Increament by ammount
      </Button>

      <button
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmount) || 0))
        }
      >
        Add Amount
      </button> */}
    </>
  );
}
