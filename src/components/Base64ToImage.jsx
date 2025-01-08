import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


function Base64ToImage() {
  const [base64, setBase64] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [error, setError] = useState("");
  

  const handleBase64Change = (event) => {
    setBase64(`${event.target.value}`);
    setError("");
    
  };

  const convertBase64ToImage = () => {
    
    if (!base64.trim()) {
      setError("Please enter a Base64 string.");
      return;
    }


    const isValidBase64Image = base64.trim().startsWith("data:image/") && base64.includes("base64,");

    if (isValidBase64Image) {
      setImageSrc(base64); 
      setError(""); 
      
    } else {
      setImageSrc(""); 
      setError(
        "Invalid Base64 image string. Make sure it starts with 'data:image/*;base64,'."
      );
    }
  };


const copyStr = ()=>{
    navigator.clipboard.writeText(base64)
    
}
  const downloadImage = async () => {
    try {
      if(imageSrc !== ''){
      const image = await fetch(imageSrc);
  
      const nameSplit = imageSrc.split("/");
      const  duplicateName = nameSplit.pop();
  
      const imageBlog = await image.blob()
      const imageURL = URL.createObjectURL(imageBlog)
      const link = document.createElement('a')
      link.href = imageURL;
      link.download = "" + duplicateName + "";
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)}else{
        setError(
          "There is No Image to Download"
        );
      }
    } catch (error) {
        console.error('Error downloading the image:', error);
    }
};

  return (
   <>
     <Container w-75>
      <Row className="shadow">
        <Col className="d-flex justify-content-center align-items-center flex-column" xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="d-flex justify-content-center align-items-center flex-column ">
        <h1 className="h2-font">Base64 to Image Converter</h1>
        <p className="text">Base64 to Image Decoder is the best online tool to converts base64 string into image. It&apos;s easy to use base64 image decoder which helps to decode picture and Download.</p>
        </div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
        <div>
        <Form>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="text-primary fs-2">Enter Base64 String</Form.Label>
        <Form.Control onChange={handleBase64Change} as="textarea" value={base64}  rows={6} />
      </Form.Group>
      <Button onClick={convertBase64ToImage}>Convert</Button>
      <Button className="ms-2" onClick={downloadImage}>Download</Button>
      <Button className="ms-2" onClick={copyStr}>Copy</Button>
      <Button className="ms-2" onClick={()=>{setBase64(''),setImageSrc('')}}>Clear</Button>
    </Form>
    </div>
    </Col>
    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className="mt-5">
        {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          <strong>{error}</strong>
        </div>
      )}{imageSrc && (
        <Image height="300px" src={imageSrc} fluid /> )}
        </Col>
      </Row>
     </Container>
   </>
  );
}

export default Base64ToImage;
