import React from "react";
import {Button, Container, Row, Col} from "react-bootstrap";
import {FormGroup, FormControl, FormText, FormLabel} from "react-bootstrap";
// import {useState} from "react";
import Select from "react-select";

export default function signUpForm() {
	// const [formValue, setFormValue] = useState([]);

	var departments = [
		{value: "engineering", label: "Engineering"},
		{value: "human resources", label: "Human Resources"},
		{value: "marketing", label: "Marketing"},
		{value: "operations", label: "Operations"},
		{value: "design", label: "Design"}
	];

	function handleSubmit(event) {
		console.log("hello world!");
	}

	return (
		<div>
			<Container>
				<Row>
					<Col xs lg={{span: 6, offset: 3}}>
						<form onSubmit={handleSubmit}>
							{/*Email Field*/}
							<FormGroup className="mb-3" controlId="formBasicEmail">
								<FormLabel>Email address</FormLabel>
								<FormControl type="email" placeholder="Enter email" />
								<FormText className="text-muted">
									We'll never share your email with anyone else.
								</FormText>
							</FormGroup>

							{/*Department dropdown*/}
							<FormGroup className="mb-3" controlId="formDepartment">
								<FormLabel>Department</FormLabel>
								<Select options={departments} />
							</FormGroup>

							{/*Name Field*/}
							<FormGroup className="mb-3" controlId="formName">
								<FormLabel>Name</FormLabel>
								<FormControl type="text" placeholder="Enter your name" />
							</FormGroup>

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
