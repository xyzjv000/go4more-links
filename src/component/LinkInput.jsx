import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function LinkInput(props) {
  const [text, setText] = React.useState('')
  const onChangeHandler = (e) => {
    let txt = e.target.value;
    setText(txt)
  }

  const onGenerate = () => {
    props.handleClose(text)
    setText('')
  }
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Redirect Links</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To set up automation redirection, please input the link that you
            want to redirect (separate by line). You can do this by pasting all
            the links 'https://example.com/' in the input
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="lniks"
            value={text}
            label="Links"
            fullWidth
            variant="outlined"
            multiline
            onChange={onChangeHandler}
            rows={15}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={onGenerate}>Generate</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
