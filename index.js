import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routing from "./Pages/Routing/Routing.js";
import { Link } from "react-router-dom";
<>
<Link to="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<Link href="https://fonts.googleapis.com/css2?family=Blacker:wght@400;700&display=swap" rel="stylesheet"/>
<Link href="https://fonts.googleapis.com/css2?family=Questa+Grande&display=swap" rel="stylesheet"/>
<Link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet"/>

</>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <div className="fullScreen">
    <Routing />
  </div>
  </>
);
