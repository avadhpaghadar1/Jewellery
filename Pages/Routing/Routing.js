import React from  "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Rings from '../Categories/Rings.js'
import Necklaces from '../Categories/Necklaces.js';
import Bangles from "../Categories/Bangles.js";
import Bracelets from "../Categories/Bracelets.js";
import AddData from "../Add_data/Add_data";
import Home  from "../Categories/Home.js";
import Login  from "../Entry Point/Login.js";
import Register from "../Entry Point/Register.js";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
          <Route path="/" element={<Home/>}></Route>
            <Route path="/Rings" element={<Rings/>}></Route>
            <Route path="/Necklaces" element={<Necklaces />}></Route>
            <Route path="/Bangles" element={<Bangles />}></Route>
            <Route path="/Bracelets" element={<Bracelets />}></Route>
            <Route path="/Add" element={<AddData />}></Route>
          </Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
