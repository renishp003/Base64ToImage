import {  Routes, Route } from "react-router-dom";
import Base64ToImage from './Base64ToImage';
import Header from './Header';
const RoutesF = () => {
  return (
    <>
    <Header/>
    
     <Routes>
    <Route index  element={<Base64ToImage/>}></Route>
    <Route index  element={<Base64ToImage/>}></Route>

     </Routes>
    

    </>
  )
}

export default RoutesF