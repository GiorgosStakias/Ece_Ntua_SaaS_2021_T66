import TopMenu from "../components/TopMenu";
import AskQuestionForm from "../components/AskQuestionForm";
import {Container} from "react-bootstrap";
import Header from "../components/Header";

const AskQuestionPage = () => {
    const pageTitle = 'Ask a question'
    const pageDescription = ''


    return (
        <div>
            <TopMenu content={"user1742"}></TopMenu>
            <Header className="mr-auto" head={pageTitle} description={pageDescription}></Header>
            <Container><AskQuestionForm/></Container>


        </div>
    )
};

export default AskQuestionPage