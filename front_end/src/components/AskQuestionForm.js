import {Col, Form, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";

function AskQuestionForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Question Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ask a question"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid question.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}  md="6" controlId="validationCustom02">
                    <Form.Label>Question Description</Form.Label>
                    <Form.Control as="textarea" rows="4" required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a description to your question.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Keywords</Form.Label>
                    <Form.Control type="text"  required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide keywords.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Button type="submit" variant={"dark"}>Submit Question</Button>
        </Form>
    );
}

export default AskQuestionForm