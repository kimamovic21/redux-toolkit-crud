import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.findIndex(todo => todo.id === id);
      state[index] = updatedTodo;
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex(todo => todo.id === id);
      state[index].completed = !state[index].completed;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, toggleComplete, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
