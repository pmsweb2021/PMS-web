import React from 'react';
import { FormikValues } from 'formik';
import CustomModal from 'shared/components/modal/modal';
import { FieldConfig } from 'shared/components/form/inputTypes';
import { CustomForm } from 'shared/components/form/form';
import * as schema from 'shared/constants/validation-schema';

interface Props {
	show: boolean;
	loading: boolean;
	handleClose: React.ReactEventHandler<{}>;
	handleConfirm: (values: FormikValues) => void;
	initialValues: {
		name: string;
		email: string;
	};
}

const UpdateProfile: React.FC<Props> = (props) => {
	return (
		<CustomModal
			className='non-panel-form'
			show={props.show}
			handleClose={props.handleClose}>
			<CustomForm
				showTitle
				showLabels
				title={'Update Profile'}
				initialValues={props.initialValues}
				schema={schema.updateProfileValidationSchema}
				onSubmit={props.handleConfirm}
				cancelSubmit={props.handleClose}
				loading={props.loading}
				fieldConfig={fieldConfig}
			/>
		</CustomModal>
	)
}

const fieldConfig: FieldConfig[] = [
	{ type: 'text', label: 'Name', name: 'name' },
	{ type: 'text', label: 'Email', name: 'email' },
];

export default UpdateProfile;
