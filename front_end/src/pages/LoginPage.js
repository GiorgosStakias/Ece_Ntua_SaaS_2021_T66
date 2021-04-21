import Header from "../components/Header";
import {Card, CardDeck, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MenuHomePage from "../components/MenuHomePage";

const LoginPage = () => {
    // page content
    const pageTitle = 'Welcome back!'
    const pageDescription = 'Log in to access your account'

    return (
        <div>
            <MenuHomePage/>
            <Header head={pageTitle} description={pageDescription} />
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}

export default LoginPage