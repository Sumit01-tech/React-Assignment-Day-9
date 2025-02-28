import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonmock.hackerrank.com/api/football_matches?page=2";

export const fetchMatches = createAsyncThunk("matches/fetchMatches", async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
});

const matchSlice = createSlice({
  name: "matches",
  initialState: {
    isLoading: false,
    isError: false,
    footballMatches: [],
    favorites: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const match = action.payload;
      const isFavorite = state.favorites.find((fav) => fav.id === match.id);
      if (isFavorite) {
        state.favorites = state.favorites.filter((fav) => fav.id !== match.id);
      } else {
        state.favorites.push(match);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.footballMatches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { toggleFavorite } = matchSlice.actions;
export default matchSlice.reducer;
