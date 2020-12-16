import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
	useEffect(() => {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: '685107017903-4ts8pelqub0hlkaksmf295saj2ifrlgd.apps.googleusercontent.com',
					scope: 'email'
				})
				.then(() => {
					const auth = window.gapi.auth2.getAuthInstance();
					onAuthChange(auth.isSignedIn.get());
					auth.isSignedIn.listen(onAuthChange);
				});
		});
	}, []);

	const onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			signIn();
		} else {
			signOut();
		}
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

const mapStateToProps = (state) => {
	return { isSignedIn: state.authred.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
