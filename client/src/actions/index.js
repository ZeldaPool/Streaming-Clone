import { CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS } from './types';
import streams from '../apis/streamaxios';
import history from '../history';

export const signIn = (userId) => {
	return {
		type: 'SIGN_IN',
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: 'SIGN_OUT'
	};
};

export const createStream = (formValues) => {
	return async (dispatch, getState) => {
		const { userId } = getState().authred;
		console.log(getState);
		const response = await streams.post('/streams', { ...formValues, userId });

		dispatch({
			type: CREATE_STREAM,
			payload: response.data
			//.data bcoz using axios
		});
		history.push('/');
	};
};

export const fetchStreams = () => {
	return async (dispatch) => {
		const response = await streams.get('/streams');

		dispatch({
			type: FETCH_STREAMS,
			payload: response.data
		});
	};
};

export const fetchStream = (id) => {
	return async (dispatch) => {
		const response = await streams.get(`/streams/${id}`);

		dispatch({
			type: FETCH_STREAM,
			payload: response.data
		});
	};
};

export const editStream = (id, formValues) => {
	return async (dispatch) => {
		const response = await streams.patch(`/streams/${id}`, formValues);

		dispatch({
			type: EDIT_STREAM,
			payload: response.data
		});
		history.push('/');
	};
};

export const deleteStream = (id) => {
	return async (dispatch) => {
		await streams.delete(`/streams/${id}`);

		//no need of response in delete

		dispatch({
			type: DELETE_STREAM,
			payload: id
		});
		history.push('/');
	};
};
