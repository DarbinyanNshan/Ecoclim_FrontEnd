import React from "react";
import "./style.css"
import { NavBar } from "../components/navbar";

import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Service } from "../pages/service";
import { ContactUs } from "../pages/contact";
import { Product } from "../pages/product";
import { Footer } from "../components/footer";
import { Projects } from "../pages/projects";



export const Router = () => {


    return (
        <div className="wrapper">
            <NavBar/>
            <div className="content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            </div>
            <Footer/>
        </div>
    )
}