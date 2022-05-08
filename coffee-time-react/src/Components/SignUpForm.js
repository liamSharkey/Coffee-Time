import React from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
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
						<Form>
							{/*Email Field*/}
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							{/*Department dropdown*/}
							<Form.Group className="mb-3" controlId="formDepartment">
								<Form.Label>Department</Form.Label>
								<Select options={departments} />
							</Form.Group>

							{/*Name Field*/}
							<Form.Group className="mb-3" controlId="formName">
								<Form.Label>Name</Form.Label>
								<Form.Control type="text" placeholder="Enter your name" />
							</Form.Group>

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
