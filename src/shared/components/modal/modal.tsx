import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../form/button';

export interface ModalProps {
	show: boolean;
	handleClose: React.ReactEventHandler<{}>;
	className?: string;
	modalTitle?: string;
	modalTitle2?: string;
	dataTestId?: string;
}

const CustomModal: React.FC<ModalProps> = props => {
	return (
		<Modal
			show={props.show}
			onHide={() => { }}
			className={`${props.className || ''} fadeIn`}>
			{props.modalTitle ?
				<Modal.Header closeButton onHide={props.handleClose}>
					<Modal.Title>
						{props.modalTitle}
						&nbsp;{props.modalTitle2}
					</Modal.Title>
				</Modal.Header>
				:
				<Button className='modal-close-btn' onClick={props.handleClose}>
					<span>×</span><span className='sr-only'>
						Close
					</span>
				</Button>
			}
			<Modal.Body>
				{props.children}
			</Modal.Body>
		</Modal>
	);
};

export default CustomModal;
