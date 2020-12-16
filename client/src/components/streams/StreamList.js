import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

const StreamList = ({ fetchStreams, streams, currentUserId, isSignedIn }) => {
	useEffect(() => {
		fetchStreams();
	}, []);

	const renderButtons = (stream) => {
		if (stream.userId === currentUserId) {
			return (
				<div>
					<Link to={`/streams/edit/${stream.id}`} className="btn btn-success mr-2">
						Edit
					</Link>
					<Link to={`/streams/delete/${stream.id}`} className="btn btn-warning">
						Delete
					</Link>
				</div>
			);
		}
	};

	const renderCRB = (stream) => {
		if (isSignedIn) {
			return (
				<div>
					<Link to="/streams/new" className="btn btn-info mt-3 float-right">
						Create Stream
					</Link>
				</div>
			);
		}
	};

	const renderList = () => {
		return streams.map((stream) => {
			return (
				<div className="list-group-item" key={stream.id}>
					<h4>
						<Link to={`/streams/${stream.id}`}> {stream.title} </Link>
					</h4>
					<div className="d-flex justify-content-between align-items-center">
						{stream.description} {renderButtons(stream)}
					</div>
				</div>
			);
		});
	};

	return (
		<div>
			<h2>Streams</h2>
			<div className="list-group">{renderList()}</div>
			{renderCRB()}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.authred.userId,
		isSignedIn: state.authred.isSignedIn
	};
	//converts object into array
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
