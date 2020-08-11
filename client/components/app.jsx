import React from 'react';
import { Typography, Container } from '@material-ui/core';

import AppContext from '../lib/context';
import UploadForm from './upload-form';

export default function App(props) {

  const uploadFile = file => {
    // Call backend
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
