import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import MatchList from "./Components/MatchList";
import SearchBar from "./Components/SearchBar";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Box textAlign="center" p={4}>
          <Heading>Football Matches App</Heading>
          <SearchBar onSearch={setSearchTerm} />
          <MatchList searchTerm={searchTerm} />
        </Box>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
