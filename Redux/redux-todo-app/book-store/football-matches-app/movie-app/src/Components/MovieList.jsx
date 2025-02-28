import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/moviesSlice";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, isError } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error fetching movies</Text>;

  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={5}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default MovieList;
