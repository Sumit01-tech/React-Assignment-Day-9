import { Box, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/matchSlice";

const MatchCard = ({ match }) => {
  const dispatch = useDispatch();

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Text fontSize="lg" fontWeight="bold">{match.team1} vs {match.team2}</Text>
      <Text>Date: {match.date}</Text>
      <Text>Venue: {match.venue}</Text>
      <Button mt={2} colorScheme="blue" onClick={() => dispatch(toggleFavorite(match))}>
        {match.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </Button>
    </Box>
  );
};

export default MatchCard;
