import { Nav, Navbar} from "react-bootstrap";


const Footer = () => {
    return (
        <>
            <footer className='text-center text-capitalize'>
                <Navbar fixed={"bottom"} bg="dark" variant="dark">
                    <Nav className="nav-fill w-100">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contactUs">Contact Us</Nav.Link>
                        <Nav.Link href="#projectDoc">Project Documentation</Nav.Link>
                        <Nav.Link href="#githubLink">Github Project</Nav.Link>
                        <Nav.Link href="#courseMaterials">Course Materials </Nav.Link>
                    </Nav>
                </Navbar>
            </footer>
        </>
    )
}

export default Footer