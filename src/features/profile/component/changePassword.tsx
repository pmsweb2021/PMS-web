import React from 'react';
import CustomModal from 'shared/components/modal/modal';
import { FieldConfig } from 'shared/components/form/inputTypes';
import { FormikValues } from 'formik';
import { CustomForm } from 'shared/components/form/form';
import * as schema from 'shared/constants/validation-schema';

interface Props {
	show: boolean;
	loading: boolean;
	handleClose: React.ReactEventHandler<{}>;
	handleConfirm: (values: FormikValues) => void;
}

const ChangePassword: React.FC<Props> = (props) => {
	return (
		<CustomModal
			className='non-panel-form'
			show={props.show}
			handleClose={props.handleClose}>
			<CustomForm
				title={'Change Your Password'}
				showTitle
				showLabels={true}
				schema={schema.changePasswordValidationSchema}
				onSubmit={props.handleConfirm}
				cancelSubmit={props.handleClose}
				loading={props.loading}
				fieldConfig={fieldConfig}
			/>
		</CustomModal>
	)
}

const fieldConfig: FieldConfig[] = [
	{ type: 'password', label: 'Old Password', name: 'old_password' },
	{ type: 'password', label: 'New Password', name: 'new_password' },
	{ type: 'password', label: 'Confirm Password', name: 'new_password_confirmation' },
];


export default ChangePassword;
