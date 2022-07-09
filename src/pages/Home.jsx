import React, { useState } from "react";

import { Container, List } from "@mui/material";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
   const [todos, setTodos] = useState([]);

   const addTodo = (todo) => {
      setTodos([...todos, todo]);
   };

   const editTodo = (id, editedText) => {
      var todosArray = [...todos];
      for (var i in todosArray) {
         if (todosArray[i].id === id) {
            todosArray[i].text = editedText;
         }
      }
      setTodos(todosArray);
   };

   const deleteTodo = (id) => {
      var filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
   };

   return (
      <Container maxWidth="sm" style={{ marginTop: "2em" }}>
         <Form addTodo={addTodo} />
         <List sx={{ marginTop: "1em" }}>
            {todos.map((todo) => (
               <div style={{ marginTop: "1em" }} key={todo.id}>
                  <TodoItem
                     todo={todo}
                     editTodo={editTodo}
                     deleteTodo={deleteTodo}
                  />
               </div>
            ))}
         </List>
      </Container>
   );
}
