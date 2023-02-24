import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { erFood } from "../constants/variables";
import { addFood } from "../feature/food/foodSlice";

export default function AddFoodList() {
  const [dishInfo, setDishInfo] = useState({
    dname: "",
    price: "",
  });

  const [errorMessages, setErrorMessages] = useState("");

  const { dishes } = useSelector((state) => state.foods);
  console.log(dishes, "fdfasdfasdf");
  const dispatch = useDispatch();

  const addNewFood = (e) => {
    e.preventDefault();

    console.log(dishInfo.dname, "javed sahab");

    if (dishInfo.dname !== "" && dishInfo.price !== "") {
      dispatch(addFood(dishInfo));
    } else {
      setErrorMessages(erFood)
      setTimeout(() => {
        setErrorMessages("");
      }, 10000);
      return false;
    }
  };

  const handleChange = (e) => {
    setDishInfo({ ...dishInfo, [e.target.name]: e.target.value });
    // console.log(e,"dishInfo")
  };

  console.log("dishInfo.....", dishInfo);

  return (
    <>
      <main className="">
        <Form id="today">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label>Add Food</Form.Label>
            <Form.Control
              required
              type="text"
              name="dname"
              placeholder="Enter food name!!"
              value={dishInfo.dname}
              onChange={handleChange}
            />
            <Form.Control
              required
              type="text"
              name="price"
              placeholder="Enter food price!!"
              value={dishInfo.price}
              onChange={handleChange}
            />
            <Form.Text className="text-dark ">
              Whats special dish today!!
            </Form.Text>
          </Form.Group>

          <Form.Group className="d-grid gap-2">
            <Button variant="dark" type="submit" onClick={addNewFood}>
              Add
            </Button>
          </Form.Group>
        </Form>
        <table className="table">
          {dishInfo.dname == "" || dishInfo.price == "" ? null : (
            <thead>
              <tr>
                <th>Dish Name</th>
                <th>Price</th>
              </tr>
            </thead>
          )}
          {console.log("dishes....", dishes)}
          <tbody>
          {dishes.length > 0 &&
            dishes.map((dishName, i) => (
              <tr key={i}>
                <td>{dishName.dname}</td>
                <td>{dishName.price}</td>
              </tr>
            ))}
            </tbody>
        </table>
        {errorMessages !== "" ? (
          <div className="col-12">
            <div className="mt-3 mx-6 p-2 alert alert-danger">
              {errorMessages}
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
}
