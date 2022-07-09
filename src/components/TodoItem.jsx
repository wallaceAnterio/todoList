import React from "react";

import {
   Checkbox,
   IconButton,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Paper,
} from "@mui/material";
import DeletIcon from "@mui/icons-material/Delete";
import EditTodoDialog from "./EditTodoDialog";

export default function TodoItem({ todo, editTodo, deleteTodo }) {
   const [openDialog, setOpenDialog] = React.useState(false);

   const dialogHandler = () => {
      setOpenDialog(!openDialog);
   };

   return (
      <>
         <EditTodoDialog
            editTodo={editTodo}
            open={openDialog}
            dialogHandler={dialogHandler}
            todo={todo}
         />
         <Paper style={{ padding: "0.6em 0em" }}>
            <ListItem
               secondaryAction={
                  <IconButton
                     edge="end"
                     aria-label="delete-task"
                     style={{ color: "#b53239" }}
                     onClick={() => deleteTodo(todo.id)}
                  >
                     <DeletIcon />
                  </IconButton>
               }
               disablePadding
            >
               <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                     <Checkbox edge="start" tabIndex={-1} disableRipple />
                  </ListItemIcon>
                  <ListItemText
                     primary={todo.text}
                     onClick={() => setOpenDialog(true)}
                  />
               </ListItemButton>
            </ListItem>
         </Paper>
      </>
   );
}
