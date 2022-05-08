import {React} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import "./components.css";

export default function Component(props) {
	console.log("test");
	return (
		<Navbar
			className="color-nav m"
			expand="lg"
			style={{position: "sticky", top: "0", "z-index": "100"}}
		>
			<Container>
				<Navbar.Brand href="Home">Coffee Time</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="AdminLogin">Admin Page</Nav.Link>
					</Nav>
					<Navbar.Brand>{props.level}</Navbar.Brand>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
