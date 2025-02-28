import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMatches } from "../redux/matchSlice";
import { Box, Grid, Spinner, Text } from "@chakra-ui/react";
import MatchCard from "./MatchCard";

const MatchList = () => {
  const { footballMatches, isLoading, isError } = useSelector((state) => state.matches);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  if (isLoading) return <Spinner size="xl" />;
  if (isError) return <Text color="red.500">Failed to load matches.</Text>;

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
      {footballMatches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </Grid>
  );
};

export default MatchList;
