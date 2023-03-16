import { Button } from '@mui/material';
import React from 'react';
import './App.css';
import LinkInput from './component/LinkInput';
import TableLinks from './component/TableLinks';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        URL Extractor
      </header>
      <div className='content'>
        <Button variant="outlined" onClick={handleClickOpen}>
          Generate URL
        </Button>
        <TableLinks />
      </div>
      <LinkInput handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} />
    </div>
  );
}

export default App;
