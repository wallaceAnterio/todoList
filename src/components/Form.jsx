import { Button, Paper, TextField } from "@mui/material";
import React from "react";

// import { Container } from './styles';

function Form() {
   return (
      <Paper style={{ padding: "1em" }} elevation={10}>
         <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
               id="outlined-basic"
               label="Task"
               variant="outlined"
               fullWidth
            />
            <Button>Add</Button>
         </div>
      </Paper>
   );
}

export default Form;
