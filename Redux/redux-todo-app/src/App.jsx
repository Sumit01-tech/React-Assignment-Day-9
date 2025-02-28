import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./redux/todoSlice";
import { Box, Button, Input, List, ListItem, Checkbox, Text, IconButton, VStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  return (
    <Box p={4} maxW="400px" mx="auto">
      <Text fontSize="2xl" mb={4}>Todo List</Text>
      <VStack spacing={4}>
        <Input
          placeholder="Enter a todo..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleAddTodo}>Add Todo</Button>
      </VStack>

      <List spacing={3} mt={4}>
        {todos.map((todo) => (
          <ListItem key={todo.id} display="flex" alignItems="center" justifyContent="space-between">
            <Checkbox
              isChecked={todo.status}
              onChange={() => dispatch(toggleTodo(todo.id))}
            >
              <Text as={todo.status ? "del" : ""}>{todo.title}</Text>
            </Checkbox>
            <IconButton
              aria-label="Delete todo"
              icon={<DeleteIcon />}
              colorScheme="red"
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default App;
