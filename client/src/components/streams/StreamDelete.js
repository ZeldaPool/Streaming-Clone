import React, { useEffect } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

const StreamDelete = (props) => {
	useEffect(() => {
		props.fetchStream(props.match.params.id);
	}, []);

	const actions = (
		<React.Fragment>
			<button
				onClick={() => props.deleteStream(props.match.params.id)}
				type="button"
				data-dismiss="modal"
				class="btn btn-danger"
			>
				Delete
			</button>
			<button onClick={() => history.push('/')} type="button" data-dismiss="modal" class="btn btn-primary">
				Go back to list
			</button>
		</React.Fragment>
	);

	if (!props.stream) {
		return (
			<div className="spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		);
	}

	return (
		<div>
			<div className="mt-5">
				<h2>You are about to delete the stream: {props.stream.title} </h2>
			</div>
			<Modal title="Delete Stream" desc="Are you sure?" actions={actions} />
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
