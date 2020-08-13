import React from 'react';
import { Typography, Container } from '@material-ui/core';
import axios from 'axios';

import AppContext from '../lib/context';
import UploadForm from './upload-form';
import Gallery from './gallery';

export default function App(props) {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    fetchImages();
  }, []);

  const uploadFile = data => {
    axios.post('/api/upload',
      data,
      { headers: { 'Content-type': 'multipart/form-data' } })
      .then(response => {
        fetchImages();
      });
  };

  const fetchImages = () => {
    axios.get('/api/gallery')
      .then(response => {
        setImages(response.data);
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
        <Gallery images={images} />
      </Container>
    </AppContext.Provider>
  );
}
