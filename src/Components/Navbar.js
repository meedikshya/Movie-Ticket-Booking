import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaFilm } from 'react-icons/fa';


export const Navbarr = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand>
            <FaFilm size = {30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mg-auto">
            <Nav.Link href="/Movie-Ticket-Booking" className='ms-3 text-light'>Home</Nav.Link>
            <Nav.Link href="#" className='ms-3 text-light'>Concerts</Nav.Link>
            <Nav.Link href="#" className='ms-3 text-light'>Movies</Nav.Link>
            <Nav.Link href="#" className='ms-3 text-light'>Theatre Event</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
              <Button variant="link" className="me-2 text-light" style={{"textDecoration":"none"}}>Login</Button>
              <Button variant='link'  className='me-2 text-light' style={{"background":"#e14658", "textDecoration":"none"}}>Register</Button>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
