import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, Container} from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<NavbarComponent />
			<h1>Hello World!</h1>
		</div>
	);
}

export default App;
