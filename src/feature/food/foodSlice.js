import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   dishes: [],
//};

const initialState = {
  dishes: [],
};

export const foodslice = createSlice({
  name: "foods",
  initialState,

  //Reducers
  reducers: {
    addFood: (state, action) => {
        // state.dishes = [...state.dishes, action.payload]
        const item = state.dishes.find((menuItem) => menuItem.dname === action.payload.dname)
        if (item) {
          item.price = action.payload.price
        } else {
          state.dishes = [...state.dishes, action.payload]
        }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFood } = foodslice.actions;

export default foodslice.reducer;
