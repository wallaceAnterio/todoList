import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

export default function EditTodoDialog({
   open,
   dialogHandler,
   todo,
   editTodo,
}) {
   // pegando valores passado para o componente.
   const [editedText, setEditedText] = React.useState(todo.text);

   const changedText = () => {
      editTodo(todo.id, editedText);
      dialogHandler()
   };

   return (
      <div>
         <Dialog
            open={open}
            onClose={dialogHandler} // fecha o modal de edição ao clicar fora
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
         >
            <DialogTitle id="alert-dialog-title" style={{ fontSize: "1em" }}>
               {"Editing Task"}
            </DialogTitle>
            <DialogContent>
               <TextField
                  defaultValue={editedText}
                  fullWidth
                  onChange={(event) => setEditedText(event.target.value)} // pega o valor do texto, que foi auterado.
               />
            </DialogContent>
            <DialogActions>
               <Button onClick={dialogHandler}>Cancel</Button>
               <Button onClick={changedText}>Ok</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
