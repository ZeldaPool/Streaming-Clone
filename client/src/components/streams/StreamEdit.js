import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

const StreamEdit = (props) => {
	useEffect(() => {
		props.fetchStream(props.match.params.id);
	}, []);

	const onsubmit = (formValues) => {
		props.editStream(props.match.params.id, formValues);
	};

	if (!props.stream) {
		return (
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		);
	}

	return (
		<div>
			<h3>Edit Stream</h3>
			<StreamForm onsubmit={onsubmit} initialValues={_.pick(props.stream, 'title', 'description')} />
		</div>
	);
};

//ownProps is the props we get above in StreamEdit
const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
