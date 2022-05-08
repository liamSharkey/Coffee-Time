import React from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";

export default function signUpForm() {
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

							{/*Name Field*/}
							<Form.Group className="mb-3" controlId="formName">
								<Form.Label>Name</Form.Label>
								<Form.Control type="text" placeholder="Enter your name" />
							</Form.Group>

							{/*Department dropdown*/}
							<Form.Group className="mb-3" controlId="formDepartment">
								<Form.Label>Department</Form.Label>
								<Form.Control
									type="text"
									placeholder="Choose your department"
								/>
								<Form.Text className="text-muted">
									We'll try and match you with someone from a different
									department.
								</Form.Text>
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
