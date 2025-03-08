import React from "react";
import {  Routes, Route } from 'react-router-dom';
import ProducerHome from "./pages/ProducerHome";
function App() {
   return (
    <Routes>
        <Route path="/" element={<ProducerHome />} />
       
      </Routes>
   );
}

export default App;
