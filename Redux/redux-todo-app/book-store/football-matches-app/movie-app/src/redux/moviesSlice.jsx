import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "bbf5161abca9b5f1288db8cce37a1212"; 
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    isError: false,
    movies: [],
    watchlist: [], 
  },
  reducers: {
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      if (!state.watchlist.find((m) => m.id === movie.id)) {
        state.watchlist.push(movie);
      }
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter((m) => m.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { addToWatchlist, removeFromWatchlist } = moviesSlice.actions; 
export default moviesSlice.reducer;
