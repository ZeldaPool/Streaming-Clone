import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = ({ signIn, signOut }) => {
	const [ isSignedIn, setIsSignedIn ] = useState(null);

	useEffect(() => {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: '685107017903-4ts8pelqub0hlkaksmf295saj2ifrlgd.apps.googleusercontent.com',
					scope: 'email'
				})
				.then(() => {
					const auth = window.gapi.auth2.getAuthInstance();
					setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
					auth.isSignedIn.listen(onAuthChange);
				});
		});
	}, []);

	const onAuthChange = () => {
		setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
	};

	const onSignIn = () => {
		window.gapi.auth2.getAuthInstance().signIn();
	};

	const onSignOut = () => {
		window.gapi.auth2.getAuthInstance().signOut();
	};

	const authButton = () => {
		if (isSignedIn === null) {
			return null;
		} else if (isSignedIn) {
			return (
				<div onClick={() => onSignOut()} className="btn btn-danger">
					Sign Out
				</div>
			);
		} else {
			return (
				<div onClick={() => onSignIn()} className="btn btn-danger">
					Sign In
				</div>
			);
		}
	};

	return <div>{authButton()}</div>;
};

export default connect(null, { signIn, signOut })(GoogleAuth);
