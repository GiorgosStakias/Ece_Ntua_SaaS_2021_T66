import {Col, Form, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";

function AnswerQuestionForm() {
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
                    <Form.Label>Select a Question</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Do sth for question Searches"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please choose a question.
                    </Form.Control.Feedback>
                    <Form.Control
                        className={"mt-lg-2"}
                        required
                        type="text"
                        placeholder="Do sth for question keywords"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please choose some keywords.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}  md="6" controlId="validationCustom02">
                    <Form.Label>Do sth with Other answers display</Form.Label>
                    <Form.Control as="textarea" rows="4" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Your answer here or whatever</Form.Label>
                    <Form.Control type="text"  required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide answer.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Button type="submit" variant={"dark"}>Submit Question</Button>
        </Form>
    );
}

export default AnswerQuestionForm