import React from 'react';
import { Redirect } from 'react-router-dom';
import { FormikValues } from 'formik';

import AuthService from 'shared/services/auth.service';
import { CustomForm } from 'shared/components/form/form';
import { FieldConfig } from 'shared/components/form/inputTypes';

import { DispatchProps, MapStateProps } from '../interface/login.interface';
import LoginWrapper from 'shared/hoc/auth/loginWrapper';
import * as schema from 'shared/constants/validation-schema';

interface Props extends DispatchProps, MapStateProps { }

const LoginComponent: React.FC<Props> = props => {
	const isLoggedIn = AuthService.checkLogin();
	if (isLoggedIn) {
		return (<Redirect to='/' />);
	}
	const onLogin = (values: FormikValues) => props.onLogin({ userId: values.userName, password: values.password });

	return (
		<LoginWrapper>
			<CustomForm
				showLabels
				title={'Login'}
				formClassName='m-t'
				schema={schema.loginFormValidationSchema}
				onSubmit={onLogin}
				loading={props.loading}
				fieldConfig={fieldConfig}
				submitBtnText={'Login'}
				submitBtnClassName='block full-width m-b'
			/>
			{/* <div className='text-center'>
				<Link to='/forget-password'>
					<small>Forget Password ?</small>
				</Link>
			</div> */}
		</LoginWrapper>
	);
};

const fieldConfig: FieldConfig[] = [
	{ type: 'text', label: 'Username', name: 'userName' },
	{ type: 'password', label: 'Password', name: 'password' },
];

export default LoginComponent;
