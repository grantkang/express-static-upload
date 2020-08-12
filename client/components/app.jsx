import React from 'react';
import { Typography, Container } from '@material-ui/core';
import axios from 'axios';

import AppContext from '../lib/context';
import UploadForm from './upload-form';

export default function App(props) {

  const uploadFile = data => {
    axios.post('/api/upload',
      data,
      { headers: { 'Content-type': 'multipart/form-data' } })
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
  };

  const contextValue = {
    uploadFile
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center">Express Static Upload</Typography>
        <UploadForm />
      </Container>
    </AppContext.Provider>

  );
}
