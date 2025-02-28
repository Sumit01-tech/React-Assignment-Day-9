import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  filter: "all",
};
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    markAsRead: (state, action) => {
      const book = state.books.find((book) => book.id === action.payload);
      if (book) book.read = true;
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) state.books[index] = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addBook, markAsRead, deleteBook, updateBook, setFilter } = bookSlice.actions;
export default bookSlice.reducer;
