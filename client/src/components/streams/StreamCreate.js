import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamCreate = (props) => {
	const onsubmit = (formValues) => {
		props.createStream(formValues);
	};

	return (
		<div>
			<h3>Create Stream</h3>
			<StreamForm onsubmit={onsubmit} />
		</div>
	);
};

export default connect(null, { createStream })(StreamCreate);
