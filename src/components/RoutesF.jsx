import {  Routes, Route } from "react-router-dom";
import Base64ToImage from './Base64ToImage';
import Header from './Header';
import ImageToBase64 from "./ImageToBase64";
const RoutesF = () => {
  return (
    <>
    <Header/>
    
     <Routes>
    <Route index  element={<Base64ToImage/>}></Route>
    <Route path="/image-to-base64"  element={<ImageToBase64/>}></Route>

     </Routes>
    

    </>
  )
}

export default RoutesF