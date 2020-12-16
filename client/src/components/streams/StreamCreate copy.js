import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

const formInput = ({ input, label, meta }) => {
	return (
		<div className="form-group">
			<label>{label}</label>
			<input className="form-control" {...input} />
			{errorRender(meta)}
		</div>
	);
};

const errorRender = ({ error, touched }) => {
	if (error && touched) {
		return <small className="form-text text-muted">{error}</small>;
	}
};

const StreamCreate = (props) => {
	//A
	const onsubmit = (formValues) => {
		console.log(formValues);
		props.createStream(formValues);
	};

	return (
		<form onSubmit={props.handleSubmit(onsubmit)}>
			<Field name="title" component={formInput} label="Stream Title" />
			<Field name="description" component={formInput} label="Stream Description" />
			<button className="btn btn-success">Submit</button>
		</form>
	);
};

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'Where is the title bruh';
	}

	if (!formValues.description) {
		errors.description = 'Just write something here pls';
	}

	return errors;
};

const formWrap = reduxForm({ form: 'newStream', validate })(StreamCreate);
//can also use Validate:Validate but here name is same so no need

export default connect(null, { createStream })(formWrap);
