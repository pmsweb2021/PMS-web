import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { FormikValues } from 'formik';

import AuthService from 'shared/services/auth.service';
import { CustomForm } from 'shared/components/form/form';
import { FieldConfig } from 'shared/components/form/inputTypes';

import { DispatchProps, MapStateProps } from '../interface/password.interface';
import LoginWrapper from 'shared/hoc/auth/loginWrapper';
import * as schema from 'shared/constants/validation-schema';


const ForgetPasswordForm: React.FC<DispatchProps & MapStateProps> = (props) => {
	const isLoggedIn = AuthService.checkLogin();
	if (isLoggedIn) {
		return (<Redirect to='/' />)
	}
	const onForgetPassword = (values: FormikValues) => props.forgetPassword({ email: values.email });

	return (
		<LoginWrapper className='forget-password-wrapper'>
			<CustomForm
				title={'Forget Password'}
				showLabels={true}
				formClassName='m-t'
				schema={schema.forgetPasswordValidationSchema}
				onSubmit={onForgetPassword}
				loading={props.loading}
				fieldConfig={fieldConfig}
				submitBtnText={'Get Password Reset Code'}
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
	{ type: 'email', label: 'Email', name: 'email' },
]


export default ForgetPasswordForm;
