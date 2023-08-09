import React, {useState} from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import face from '../assets/logo1.png'
// import frame1 from '../assets/frame1.png'
import '../style/home.css'
import Image from '../components/Image';


const Home = () => {
  return (
    <div >

<Navbar expand="lg" className="bg-white border-bottom border-2 head ">
        <Container>
          <Navbar.Brand>
            <Link to="/"><img src={Logo} alt="" /> </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
                 
            <div className="ms-auto my-2  my-lg-0 d-flex">
              <div className='mt-3 me-3 '>
                <Nav className="m-auto my-2 my-lg-0" navbarScroll>
                  <Link to="/Newtask"  className="text-decoration-none text-dark fw-bold tag me-5" > New Tasks </Link>

                  <Link to="/Alltask" className="text-decoration-none text-dark fw-bold tag me-5"  > All Tasks </Link>
                </Nav>
              </div>
              <img src={face} alt="" className="mx-2 my-2 my-lg-0 d-block" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <div className="container">
          <div className="box-container d-md-flex justify-content-evenly mt-5 pt-md-5">
            <div className="text">
              <h1>Manage your Tasks on  <span>TaskDuty</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
              <button><Link to='' className='text-white text-decoration-none'>Go to My Tasks</Link></button>
            </div>
            <Image/>
            {/* <div className="img my-4"><img src={Image} alt="" width='100%' /></div> */}
          </div>
        </div>

    </div>
  )
}

export default Home