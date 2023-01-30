import { FC } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


interface IProps {}

export const NavbarComponent: FC<IProps> = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Messaging App</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
