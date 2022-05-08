import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AdminLogin from "./AdminLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes className="my-5">
				<Route path="/Home" element={<App />}></Route>
				<Route path="/AdminLogin" element={<AdminLogin />}></Route>
				<Route path="/" element={<App />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
