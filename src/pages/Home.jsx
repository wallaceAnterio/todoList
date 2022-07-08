import React, { useState } from "react";

import { Container, List } from "@mui/material";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
   const [todos, setTodos] = useState([]);

   const addTodo = (todo) => {
      setTodos([...todos, todo]);
   };

   return (
      <Container maxWidth="sm" style={{ marginTop: "2em" }}>
         <Form addTodo={ addTodo}/>
         <List sx={{ marginTop: "1em" }}>
            {todos.map((todo) => (
               <div style={{marginTop: '1em'}} key={todo.id}>
                  <TodoItem todo={todo}/>
               </div>
            ))}
         </List>
      </Container>
   );
}
