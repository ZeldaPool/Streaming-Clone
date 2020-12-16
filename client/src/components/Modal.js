import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="container mt-3">
			<div className="modal" id="modmod">
				<div className="modal-dialog modal-md">
					<div className="modal-content">
						<h5 className="modal-header">{props.title}</h5>
						<div className="modal-body">{props.desc}</div>
						<div className="modal-footer">{props.actions}</div>
					</div>
				</div>
			</div>

			<div className="btn btn-primary" href="#" data-toggle="modal" data-target="#modmod">
				Click to proceed
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
