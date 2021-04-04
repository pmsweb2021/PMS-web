import React from 'react';
import { Redirect, Link, RouteComponentProps } from 'react-router-dom';
import { FormikValues } from 'formik';

import AuthService from 'shared/services/auth.service';
import { CustomForm } from 'shared/components/form/form';
import { FieldConfig } from 'shared/components/form/inputTypes';

import { ResetPasswordDispatchProps, ResetPasswordParams, MapStateProps } from '../interface/password.interface';
import LoginWrapper from 'shared/hoc/auth/loginWrapper';
import * as schema from 'shared/constants/validation-schema';

interface OwnProps extends ResetPasswordDispatchProps, MapStateProps, RouteComponentProps<{ token: string }> { }

const ResetPasswordForm: React.FC<OwnProps> = (props) => {
	const isLoggedIn = AuthService.checkLogin();
	if (isLoggedIn || props.closeModal) {
		return (<Redirect to='/login' />)
	}
	const onResetPassword = (values: FormikValues) => props.resetPassword(values as ResetPasswordParams, props.match.params.token);

	return (
		<LoginWrapper>
			<CustomForm
				title={'Reset Your Password'}
				showLabels={true}
				formClassName='m-t'
				schema={schema.resetPasswordValidationSchema}
				onSubmit={onResetPassword}
				loading={props.loading}
				fieldConfig={fieldConfig}
				submitBtnText={'Reset Password'}
				submitBtnClassName='block full-width m-b'
			/>
			<div className='text-center'>
				<Link to='/login'>
					<small>Back to Login</small>
				</Link>
			</div>
		</LoginWrapper>
	)
}

const fieldConfig: FieldConfig[] = [
	// { type: 'email', label: 'Email', name: 'email' },
	{ type: 'password', label: 'New Password', name: 'password' },
	{ type: 'password', label: 'Confirm Password', name: 'password_confirmation' },
];

export default ResetPasswordForm;
