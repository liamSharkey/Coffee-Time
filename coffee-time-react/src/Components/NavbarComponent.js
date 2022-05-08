import {React} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import "./components.css";

export default function Component(props) {
	console.log("test");
	return (
		<Navbar className="color-nav m" expand="lg">
			<Container>
				<Navbar.Brand href="Home">Coffee Time</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Navbar.Brand>{props.level}</Navbar.Brand>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
