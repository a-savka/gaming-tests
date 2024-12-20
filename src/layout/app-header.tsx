import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import './app-header.scss';

const AppHeader: FC = () => {

  return <Navbar expand="lg" className="app-header">
    <Container>
      <Navbar.Brand href="/#/" className="header-title">
        Phaser Test
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="/#/about">About</Nav.Link>
          <Nav.Link href="/#/counter">Counter</Nav.Link>
          <Nav.Link href="/#/counter-r">Counter R</Nav.Link>
          <Nav.Link href="/#/counter-z">Counter Z</Nav.Link>
          <Nav.Link href="/#/king-game">King Game</Nav.Link>
          <Nav.Link href="/#/bindings">Bindings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

}

export default AppHeader;
