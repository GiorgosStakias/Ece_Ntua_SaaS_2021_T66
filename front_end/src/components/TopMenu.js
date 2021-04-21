import {useHistory} from "react-router-dom";
import {Form, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

const TopMenu = ({content}) => {
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
                    <Nav className="ml-auto">
                        <Nav.Link >{content}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TopMenu