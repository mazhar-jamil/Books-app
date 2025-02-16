import React, { useState } from 'react'

function UploadFile() {

  const [File,setFile] = useState(null);

  const adminUploadFile = (event) => {
    const selectedFile = event.target.files[0];

    if(selectedFile){
      const reader = new FileReader();

      reader.readAsDataURL(selectedFile);

      reader.onload = () => {
        localStorage.setItem("adminFileAstore", reader.result);
      };
    }
  }
  return (
    <>
    <div>
      <h2>Admin Panel - Upload Image</h2>
      <input type="file" onChange={adminUploadFile} />
    </div>

    </>
  )
}

export default UploadFile