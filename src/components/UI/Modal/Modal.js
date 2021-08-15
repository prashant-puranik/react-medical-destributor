import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import {Fragment} from 'react';

const Backdrop = props => { return <div className={classes.backdrop} onClick={props.onClose}></div> };

const ModalOverlay = props => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
}

const portalId = document.getElementById("overlays");

const Modal = props => { 
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalId)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ ModalOverlay>, portalId)}
		</Fragment>
	);
};

export default Modal;