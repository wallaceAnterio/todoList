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

export default function TodoItem({ todo }) {
   return (
      <Paper style={{ padding: "0.6em 0em" }}>
         <ListItem
            secondaryAction={
               <IconButton
                  edge="end"
                  aria-label="delete-task"
                  style={{ color: "#b53239" }}
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
               <ListItemText primary={todo.text} />
            </ListItemButton>
         </ListItem>
      </Paper>
   );
}
