import { Button } from '@mui/material';
import React from 'react';
import './App.css';
import LinkInput from './component/LinkInput';
import TableLinks from './component/TableLinks';

function App() {
  const [open, setOpen] = React.useState(false);
  const [links, setLinks] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (arr) => {
    console.log(arr);
    if (typeof (arr) === 'string' && arr !== '') {
      let result = arr.split(/\r?\n|\r|\n/g);
      console.log(result);
      setLinks(result)
    }
    else if (typeof (arr) === 'string' && arr === '') {
      setLinks([])
    }
    setOpen(false);
  };

  const openLink = (i) => {
    console.log(i, "open");
    window.open(links[i], '_blank');
  }
  const removeLink = (i) => {
    const newLinks = links.slice()
    newLinks.splice(i, 1);
    setLinks(newLinks)
  }

  const openAllLink = () => {
    links.forEach(link => {
      setTimeout(() => {
        window.open(link, '_blank')
      }, 50);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        URL Extractor
      </header>
      <div className='content'>
        <Button variant="outlined" onClick={handleClickOpen}>
          Generate URL
        </Button>
        {links.length > 0 && <Button variant="outlined" onClick={openAllLink}>
          Open All Links {links.length}
        </Button>}
        <TableLinks links={links} openLink={openLink} removeLink={removeLink} />
      </div>
      <LinkInput handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} />
    </div>
  );
}

export default App;
