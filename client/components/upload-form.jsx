import React from 'react';
import { Input, Button } from '@material-ui/core';
import AppContext from '../lib/context';

export default function UploadForm(props) {
  const [file, setFile] = React.useState({});
  const context = React.useContext(AppContext);

  const handleChange = e => {
    const target = e.target;
    setFile(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    context.uploadFile(file);
    e.target.reset();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Input type="file" onChange={handleChange} inputProps={{ accept: 'image/png, image/jpeg' }} />
        <Button color="primary" variant="contained" type="submit">Upload File</Button>
      </form>
    </React.Fragment>
  );
}
