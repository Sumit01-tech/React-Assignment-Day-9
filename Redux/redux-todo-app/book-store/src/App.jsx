import { Box, Button, Input, List, ListItem, Text, VStack, Checkbox, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addBook, markAsRead, deleteBook, setFilter } from "./redux/bookSlice";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const filter = useSelector((state) => state.books.filter);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleAddBook = () => {
    if (title && author && genre) {
      dispatch(addBook({ id: uuidv4(), title, author, genre, read: false }));
      setTitle("");
      setAuthor("");
      setGenre("");
    }
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredBooks = books.filter((book) => {
    if (filter === "all") return true;
    if (filter === "read") return book.read;
    if (filter === "unread") return !book.read;
    return false;
  });

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Book Store</Text>

        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />

        <Button colorScheme="teal" onClick={handleAddBook}>Add Book</Button>

        <Select onChange={handleFilterChange} placeholder="Filter Books">
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </Select>

        <List spacing={3}>
          {filteredBooks.map((book) => (
            <ListItem key={book.id} border="1px solid" p={2} borderRadius="md">
              <Text fontWeight="bold">{book.title}</Text>
              <Text>Author: {book.author}</Text>
              <Text>Genre: {book.genre}</Text>

              <Checkbox isChecked={book.read} onChange={() => dispatch(markAsRead(book.id))}>
                Mark as Read
              </Checkbox>

              <Button colorScheme="red" size="sm" onClick={() => dispatch(deleteBook(book.id))}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default App;
