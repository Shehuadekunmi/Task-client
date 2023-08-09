import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import face from '../assets/logo1.png'
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white border-bottom border-2 head">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
           
            
            <div className="ms-auto my-2 my-lg-0 d-flex">
              <div className='mt-3 me-3 '>
                <Nav className="m-auto my-2 my-lg-0" navbarScroll>

                  <Link
                    to="/AllTask"
                    className="text-decoration-none text-dark fw-bold tag"
                  >
                    All Tasks
                  </Link>
                </Nav>
              </div>
              <img src={face} alt="" className="mx-2 my-2 my-lg-0 d-block" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header