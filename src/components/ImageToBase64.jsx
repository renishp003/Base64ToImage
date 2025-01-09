import React, { useCallback } from 'react'
import  { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useDropzone} from 'react-dropzone';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer } from 'react-toastify';

// import Image from 'react-bootstrap/Image';

const ImageToBase64 = () => {

  const [file, setFile] = useState(null);
const [base64,setBase64] = useState('')
const [error, setError] = useState('')

  const onDrop = useCallback((acceptedFiles) => {
    
    setFile(acceptedFiles[0]);
    setError('')
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,   
  });
  const convertToBase64 = () => {
    if(file){
      
      const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => {
      setBase64(reader.result)
    }
    }else{
      console.log("hi")
      setError("Please Select The Image")
    }
    
  }
      const copyStr = ()=>{
        if(base64 === ''){
          console.log(base64.length)
          toast.error("Nothing To Copy");
      
        }
        else if(navigator.clipboard.writeText(base64)){
          toast.success("Copied to Clipboard");
        }
          
      }

  return (
    
    <Container w-75>
      <ToastContainer
   autoClose={3000}
   hideProgressBar={true}
  
/>
      <Row className="shadow">
        <Col className="d-flex justify-content-center align-items-center flex-column" xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="d-flex justify-content-center align-items-center flex-column ">
        <h1 className="h2-font">  Image to Base64 Converter</h1>
        <p className="text">Image to Base64 Decoder is the best online tool to converts image into base64 string. It&apos;s easy to use  image base64 decoder which helps to decode picture and Download.</p>
        </div>
        </Col>
        <Col>
       
    <div {...getRootProps()} className='dropzone'>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here ...</p>
      ) : (
        <p>Drag &apos;n&apos; drop a file here, or click to select one</p>
      )}
      {file && (
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <h4>File Preview:</h4>
          <p>File Name: {file.name}</p>
          <p>File Size: {(file.size / 1024).toFixed(2)} KB</p>
          {file.type.startsWith("image/") && (
            <img
            height='400px'
            width="400px"
              src={URL.createObjectURL(file)}
              alt="Preview"
              
            />
          )}
        </div>
        
      )}
        {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          <strong>{error}</strong>
        </div>
      )}
    </div>
    <Button className='mt-3 mb-3 me-2' variant="primary" onClick={convertToBase64}>
        Convert
      </Button>
      <Button className='mt-3 mb-3 me-2' variant="primary" onClick={copyStr}>
        Copy
      </Button>
      <Button className='mt-3 mb-3 me-2' variant="primary" onClick={()=>{setBase64(''),setFile('')}}>
        Clear
      </Button>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="text-primary fs-2">Base64 String</Form.Label>
        <Form.Control  as="textarea" value={base64}   rows={6} />
      </Form.Group>
     
        </Col>
        
      </Row>
     </Container>

  )
}

export default ImageToBase64