import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import MenuHomePage from "./components/MenuHomePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AskQuestionPage from "./pages/AskQuestionPage";
import AnswerQuestionPage from "./pages/AnswerQuestionPage";
//in switch we must add difereent pages
function App() {
  return (
      <Router>
        <main >
          <Container fluid={true}>
            <Switch>
              <Route path='/' component={HomePage} exact />
              <Route path='/login' component={LoginPage}  />
              <Route path='/signup' component={SignUpPage}  />
                <Route path='/askQuestion' component={AskQuestionPage}  />
                <Route path='/answerQuestion' component={AnswerQuestionPage}  />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
  );
}

export default App;

