import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [imageFile, setImageFile] = useState();

  const image = useRef();

  useEffect(() => {
    console.log(image);
  }, [image]);

  useEffect(() => {
    console.log(imageFile);
    fetch('http://localhost5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: imageFile,
      }),
    });
  }, [imageFile]);

  return (
    <div>
      <form action="upload" method="post" enctype="multipart/form-data">
        <input type="file" name="userfile" Ref={image}></input>
        <input
          type="submit"
          onClick={() => {
            setImageFile(image);
          }}
        ></input>
      </form>
    </div>
  );
}

export default App;
