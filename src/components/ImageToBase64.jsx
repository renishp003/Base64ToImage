import React from 'react'
import  { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

const ImageToBase64 = () => {
    const [image, setImage] = useState('')
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
        }
       }
       
       const convertToBase64 = (e) => {
        e.preventDefault()
        const reader = new FileReader()
    
        reader.readAsDataURL(image)
    
        reader.onload = () => {
          console.log('called: ', reader)
          setImage(reader.result)
        }
      }

  return (
    <Container w-75>
      <Row className="shadow">
        <Col className="d-flex justify-content-center align-items-center flex-column" xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="d-flex justify-content-center align-items-center flex-column ">
        <h1 className="h2-font">  Image to Base64 Converter</h1>
        <p className="text">Image to Base64 Decoder is the best online tool to converts image into base64 string. It&apos;s easy to use  image base64 decoder which helps to decode picture and Download.</p>
        </div>
        </Col>
        <Col>
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control  onChange={onImageChange} type="file" />
        <button onClick={convertToBase64}>click</button>
        <Image height="300px" width="400px" src={image} alt='No Image' fluid />  

      </Form.Group>
        </Form>
        </Col>
        
      </Row>
     </Container>

  )
}

export default ImageToBase64