import React from "react";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../redux/moviesSlice";
import { Box, Image, Button, Text } from "@chakra-ui/react";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Box p="4">
        <Text fontWeight="bold">{movie.title}</Text>
        <Button
          colorScheme="blue"
          mt="2"
          onClick={() => dispatch(addToWatchlist(movie.id))}
        >
          Add to Watchlist
        </Button>
      </Box>
    </Box>
  );
};

export default MovieCard;
