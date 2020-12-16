import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js';

const StreamShow = (props) => {
	const videoRef = React.createRef();
	const Player = useRef();

	useEffect(() => {
		props.fetchStream(props.match.params.id);
		buildPlayer();
		return () => {
			Player.current.destroy();
		};
	}, []);

	const buildPlayer = () => {
		if (!props.stream) {
			return;
		}
		Player.current = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${props.match.params.id}.flv`
		});

		Player.current.attachMediaElement(videoRef.current);
		Player.current.load();
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
			<video className="mt-3" ref={videoRef} style={{ width: '100%' }} controls={true} />
			<h1>{props.stream.title}</h1>
			<h4>{props.stream.description}</h4>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
