import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

//685107017903-4ts8pelqub0hlkaksmf295saj2ifrlgd.apps.googleusercontent.com

const Navibar = () => {
	return (
		<Navbar bg="dark" expand="lg">
			<Link to="/">
				<Navbar.Brand className="text-light">
					<h2>NotTwitch</h2>
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="NNN" />
			<Navbar.Collapse id="NNN">
				<Nav className="mr-auto" />
				<Link to="/streams/new">
					<Button className="btn btn-dark border-0">Create Stream</Button>
				</Link>
				<Nav className="mr-4 mt-2" />
				<Link to="/">
					{/* <Button className="btn btn-success border-0">Sign-Up</Button> */}
					<GoogleAuth />
				</Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navibar;
