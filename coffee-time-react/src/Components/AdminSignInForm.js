import React from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";

export default function AdminSignInForm() {
	return (
		<div>
			<Container>
				<Row>
					<Col xs lg={{span: 6, offset: 3}}>
						<Form>
							{/*Company Name Field*/}
							<Form.Group className="mb-3" controlId="formCompanyName">
								<Form.Label>Company name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your company's name"
								/>
							</Form.Group>

							{/*Password Field*/}
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
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
