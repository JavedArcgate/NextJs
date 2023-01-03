import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

export default function Ratings({ rating }) {
  return (
    <span className="">
      {Array.from({ length: rating }, (data, i) => {
        const value = rating.split("");
        let newNumber = value.length > 2 ? value[2] : 0;
        newNumber = newNumber < 4 ? 0 : newNumber > 4 && newNumber <= 9 ? 5 : 0;
        const MainNumber = value[0] + "." + newNumber;
        if (MainNumber % 2 == 0 || MainNumber % 2 == 1) {
          return (
            <FaStar
              className="ms-1"
              style={{ fontSize: "10", marginBottom: "2" }}
            />
          );
        } else if (newNumber == 5) {
          console.log(i === Math.floor(rating) - 1, "lengtheeeee");
          let halfStar = (
            <FaStarHalf
              className="ms-1"
              style={{ fontSize: "10", marginBottom: "2" }}
            />
          );
          let star = (
            <FaStar
              className="ms-1"
              style={{ fontSize: "10", marginBottom: "2" }}
            />
          );
          return (
            <>
              {star} {i === Math.floor(rating) - 1 ? halfStar : null}
            </>
          );
        }
      })}
    </span>
  );
}
