import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import SignUpForm from "./Components/SignUpForm";

function App() {
	return (
		<div className="App">
			<NavbarComponent />
			<h1 className="my-5">Welcome To Coffee Time!</h1>
			<Container>
				<p>
					Coffee time allows WFH employees to get to know coworkers similar to
					how they might've met in office!
				</p>
				<p>
					Simply register for your company's coffee time, and every week you'll
					be paired with a colleague (notified by email).
				</p>
				<p>
					At this point, you and your paired partner can setup a meeting over
					the next week to get to know one another - or have some coffee time :)
				</p>
			</Container>

			<h2>Sign Up!</h2>

			<SignUpForm />
		</div>
	);
}

export default App;
