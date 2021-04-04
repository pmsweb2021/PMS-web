import React from 'react';
import { Formik, FormikValues } from 'formik';
import * as Yup from 'yup';

import { Input, FieldConfig } from './inputTypes';
import Button from './button';

interface CustomFormProps {
	schema: Yup.ObjectSchema<any>;
	onSubmit: (values: FormikValues) => void;
	loading: boolean;
	fieldConfig: FieldConfig[];
	initialValues?: any;
	dataTestId?: string;
	submitBtnText?: string;
	validateOnBlur?: boolean;
	validateOnChange?: boolean;
	title?: string;
	cancelSubmit?: React.ReactEventHandler<{}>;
	formClassName?: string;
	inputDivClassName?: string;
	submitBtnClassName?: string;
	error?: string;
	showLabels?: boolean;
	showTitle?: boolean;
}

/**
 * common form to be rendered
 */
const CustomForm: React.FC<CustomFormProps> = (props) => {
	const validateOnBlur = props.validateOnBlur === undefined ? true : props.validateOnBlur;
	const validateOnChange = props.validateOnChange === undefined ? false : props.validateOnChange;
	const initialValues = { ...props.initialValues || {} };
	props.fieldConfig.forEach(config => {
		if (!initialValues[config.name]) {
			initialValues[config.name] = '';
		}
	});
	return (
		<div className='custom-form' data-testid={props.dataTestId || null}>
			<div className='row'>
				<div className='col-lg-12'>
					<div className='ibox float-e-margins'>
						{!props.showTitle && <div className='ibox-title'>
							{!!props.title &&
								<h5 className='text-align-center'>
									{props.title}
								</h5>}
						</div>}
						<div className='ibox-content'>
							{!!props.title && !!props.showTitle &&
								<h2 className='text-align-center'>
									{props.title}
								</h2>}
							<Formik
								initialValues={initialValues}
								validateOnBlur={validateOnBlur}
								validateOnChange={validateOnChange}
								onSubmit={props.onSubmit}
								validationSchema={props.schema} >

								{({ handleSubmit, setFieldValue, setFieldTouched, errors, touched }) => (
									<form onSubmit={handleSubmit} className={props.formClassName || ''}>
										<fieldset>
											{props.fieldConfig.map((config, index) => (
												<div key={index} className={[props.inputDivClassName || '', 'form-group'].join('')}>
													<Input
														showLabels={props.showLabels}
														setFieldValue={setFieldValue}
														config={config}
														placeholder={config.placeHolder || config.label}
														type={config.type}
														name={config.name} />
												</div>
											))}

											<div className='row'>
												{!!props.error &&
													<p className='error text-align-center'>
														{props.error}
													</p>}
											</div>
											<div className='mb-3 mt-3 d-flex align-items-center justify-content-center'>
												{props.cancelSubmit &&
													<Button
														btnType='danger'
														onClick={props.cancelSubmit}
														type='button'
														className='mr-2 width-100px'>Cancel</Button>
												}
												<Button
													className={`${props.submitBtnClassName} width-100px`}
													loading={props.loading}
													type='submit'
													btnType='primary'>{props.submitBtnText || 'Submit'}</Button>
											</div>

										</fieldset>
									</form>
								)}
							</Formik>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export {
	CustomForm
};
