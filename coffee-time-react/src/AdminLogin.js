import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import AdminSignInForm from "./Components/AdminSignInForm";

export default function AdminLogin() {
	let password = "password";
	let companyName = "companyName";

	return (
		<div>
			<NavbarComponent />
			<AdminSignInForm />
		</div>
	);
}
