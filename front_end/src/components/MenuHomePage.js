import {Col, Form, Nav, Navbar, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom';

const MenuHomePage = () => {
    const history = useHistory();
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <LinkContainer to='/'>
                    <Navbar.Brand >App Icon</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link >App Name</Nav.Link>
                        <Nav.Link >Whatever</Nav.Link>
                    </Nav>
                    <Form inline >
                        <Button variant="light" className="mr-sm-2" onClick={()=> history.push("/login")}>Sign In</Button>
                        <Button variant="light" className="mr-sm-2" onClick={()=> history.push("/signup")}>Sign Up</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MenuHomePage