import TopMenu from "../components/TopMenu";
import {Container} from "react-bootstrap";
import Header from "../components/Header";
import AnswerQuestionForm from "../components/AnswerQuestionForm";


const AnswerQuestionPage = () => {
    const pageTitle = 'Answer a question'
    const pageDescription = ''


    return (
        <div>
            <TopMenu content={"user1742"}></TopMenu>
            <Header className="mr-auto" head={pageTitle} description={pageDescription}></Header>
            <Container><AnswerQuestionForm/></Container>


        </div>
    )
};

export default AnswerQuestionPage