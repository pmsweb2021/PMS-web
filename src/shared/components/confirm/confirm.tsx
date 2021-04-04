import React from 'react';
import { Modal } from 'react-bootstrap';

import CustomModal, { ModalProps } from '../modal/modal';
import Button from '../form/button';

interface ConfirmComponentProps {
	message: string;
	handleConfirm: () => void;
	loading?: boolean;
	submitBtnText?: string;
	cancelBtnText?: string;
}

const Confirm: React.FC<ModalProps & ConfirmComponentProps> = (props) => {
	return (
		<CustomModal show={props.show} handleClose={props.handleClose} className='confirm-wrapper'>
			<div className='confirm-icon' data-testid='confirm-icon'><i className='fa fa-exclamation' /></div>
			<p className='mt-3 font-20 text-align-center'>{props.message}</p>
			<Modal.Footer className='modal-footer-area text-align-center'>
				<Button className='width-100px' btnType='danger' onClick={props.handleClose}>
					{props.cancelBtnText || 'No'}
				</Button>
				<Button className='width-100px' btnType='primary' loading={props.loading} onClick={props.handleConfirm}>
					{props.submitBtnText || 'Yes'}
				</Button>
			</Modal.Footer>
		</CustomModal>
	)
}

export default Confirm;
