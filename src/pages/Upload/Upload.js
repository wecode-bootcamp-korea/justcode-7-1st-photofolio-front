import React, { useRef, useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import UploadMain from './UploadMain';
import UploadWrite from './UploadWrite';
import UploadModal from './UploadModal';
import Footer from '../../components/Footer/Footer';

function App() {
  const [image, setImage] = useState();
  const [uploadCheck, setUploadCheck] = useState(true);

  function uploadImageClick(event) {
    event.preventDefault();
  }

  function onImgChange(event) {
    setImage([...event.target.files]);
    setUploadCheck(false);
  }
  return (
    <>
      <Header />
      {uploadCheck && <UploadMain onImgChange={onImgChange} />}
      {!uploadCheck && <UploadWrite />}
      <Footer />
    </>
  );
}

export default App;
