import { PLUS, MINUS } from "./actionTypes";

export const action_increment = () => {
  return(dispatch)=>{
    dispatch(
      {
        type: PLUS,
      }
    )
  }
}

export const action_decrement = () => {
  return (dispatch)=>{
    dispatch(
      {
        type: MINUS,
      }
    )
  }
}