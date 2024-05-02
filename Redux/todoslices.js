import { createSlice } from "@reduxjs/toolkit";

const Todoslice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    settodo: (state, action) => {
      const { text, id, date } = action.payload;
      const newState = { id, text, date };
      state.push(newState);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { settodo, deleteTodo } = Todoslice.actions;
export default Todoslice.reducer;
