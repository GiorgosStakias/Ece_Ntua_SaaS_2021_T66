import Header from "../components/Header";
import {Card, CardDeck, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MenuHomePage from "../components/MenuHomePage";

const SignUpPage = () => {
    // page content
    const pageTitle = 'AskMeAnything'
    const pageDescription = 'Create your AskMeAnything Account'

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
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Re enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Re enter password" />
                </Form.Group>
                <Button variant="dark" type="submit" className="mr-sm-2">
                    Sign Up
                </Button>
                <Button variant="dark" type="submit">
                    Cancel
                </Button>
            </Form>
        </div>
    )
}

export default SignUpPage