import React, { ChangeEventHandler } from 'react';
import enGB from 'date-fns/locale/en-GB';
import DatePicker, { registerLocale } from 'react-datepicker';
import { Field, ErrorMessage, FieldProps, FormikValues } from 'formik';
import FieldErrorMessage from './error';
import Option from './option';
import 'react-datepicker/dist/react-datepicker.css';
export interface DropDownAndCheckboxOptions {
	name: string;
	value: string | number;
}
export interface FieldConfig {
	type: 'text' | 'textarea' | 'email' | 'password' | 'number' | 'dropdown' | 'checkbox' | 'dropdown' | 'radio';
	label: string;
	name: string;
	className?: string;
	placeHolder?: string;
	otherOptions?: {
		dropDownOptions?: DropDownAndCheckboxOptions[];
		checkboxOptions?: DropDownAndCheckboxOptions[];
		isMultiSelect?: boolean;
	};
	hideErrorMessage?: boolean;
}
interface TextFieldProps {
	name: string;
	placeholder: string;
	config: FieldConfig;
	value?: any;
	setFieldValue: (field: string, value: any) => void;
	readOnly?: boolean;
	type?: 'text' | 'textarea' | 'email' | 'password' | 'number' | 'checkbox' | 'dropdown' | 'radio';
	className?: string;
	autoComplete?: string;
	showLabels?: boolean;
	onChange?: ChangeEventHandler<any>;
}

const RenderInput: React.FC<TextFieldProps & { field: any }> = props => {
	switch (props.type) {
		// render text input in case of text, textarea, email, password and number
		case 'textarea':
			return (
				<>
					{props.showLabels && props.config.label &&
						<label className='text-capitalize input-label-wrapper'>
							{props.config.label}
						</label>}
					<textarea
						{...props.field}
						value={getValue(props.field.value)}
						id={props.name}
						className={`${props.className || ''} form-control`}
						placeholder={props.placeholder}
						readOnly={props.readOnly}
						autoComplete={`${props.autoComplete || 'off'}`}
					/>
					<ErrorMessage name={props.config.name} component={FieldErrorMessage} />
				</>
			);
		case 'text':
		case 'email':
		case 'password':
		case 'number':
			return (
				<>
					{props.showLabels && props.config.label &&
						<label className='text-capitalize input-label-wrapper'>
							{props.config.label}
						</label>}
					<input
						{...props.field}
						value={getValue(props.field.value)}
						id={props.name}
						type={props.type}
						className={`${props.className || ''} form-control`}
						placeholder={props.placeholder}
						readOnly={props.readOnly}
						autoComplete={`${props.autoComplete || 'off'}`}
					/>
					<ErrorMessage name={props.config.name} component={FieldErrorMessage} />
				</>
			);
		case 'radio':
			return (
				<div className='radio-input-wrapper'>
					<input
						{...props.field}
						type='radio'
						id={props.name + props.value}
						name={props.name}
						checked={props.field.value === props.value}
						value={props.value}
						onChange={() => props.setFieldValue(props.name, props.value)}
					/>
					<label
						className={`pointer text--secondary font--medium ${props.field.value === props.value ? 'checked' : ''}
						${props.className ? props.className : ''}`}
						htmlFor={props.name + props.value}
					>
						{props.children}
					</label>
					{!props.config.hideErrorMessage && <ErrorMessage name={props.config.name} component={FieldErrorMessage} />}
				</div>
			);
		case 'checkbox':
			return (
				<div className='form-group d-flex align-items-baseline'>
					{props.config.label &&
						<label className='text-capitalize col-xs-4 col-sm-2 control-label'>
							{props.config.label}
						</label>}
					<div className='checkbox-wrapper col-xs-8 col-sm-10'>
						{geCheckboxOptions(props.config).map(option => {
							const setCheckboxvalue: ChangeEventHandler<HTMLInputElement> = evt => {
								props.setFieldValue(props.config.name, getCheckboxValue(props.field, evt));
							};
							const isChecked = (props.field.value || []).map((key: any) => (key || '').toString()).includes(option.value.toString());
							return (
								<div className='checkbox-content' key={option.value}>
									<label className='text-capitalize checkbox-label'>
										{option.name}
										<input
											placeholder={option.name}
											checked={isChecked}
											onChange={setCheckboxvalue}
											type='checkbox'
											name={option.name}
											value={option.value} />
										<span className='checkmark' />
									</label>
								</div>
							);
						})}
					</div>
					<ErrorMessage name={props.config.name} component={FieldErrorMessage} />
				</div>
			);

		// render dorpdown when dropdown type is provided
		case 'dropdown':
			const setDropdownValue: ChangeEventHandler<any> = evt => {
				if ((props.config.otherOptions || {}).isMultiSelect) {
					props.setFieldValue(props.config.name, [].slice.call(evt.target.selectedOptions).map((option: any) => option.value));
				} else {
					props.setFieldValue(props.config.name, evt.target.value);
				}
				if (props.onChange) {
					props.onChange(evt);
				}
			};
			return (
				<div className='row'>
					{props.config.label &&
						<label className='text-capitalize col-sm-12 control-label'>
							{props.config.label}
						</label>}
					<div className='col-sm-12'>
						<select
							placeholder={props.config.placeHolder || props.config.label}
							value={props.field.value}
							onChange={setDropdownValue}
							name={props.config.name}
							className='form-control'
							multiple={(props.config.otherOptions || {}).isMultiSelect}
						>
							<option value=''>---SELECT---</option>
							{geDropDownOptions(props.config).map(option => (
								<Option key={option.name} name={option.name} value={option.value} />
							))}
						</select>
						<ErrorMessage name={props.config.name} component={FieldErrorMessage} />
					</div>
				</div >
			);
		default:
			return <></>;
	}
};

/**
 * common input field component
 * renders input based on the field configuration
 * @param props { field, form: { touched, errors }, ...props }
 */
const Input: React.FC<TextFieldProps> = props => {
	const fieldRender = ({ field }: { field: any }) => {
		return <RenderInput {...props} field={field} />;
	};

	return (
		<Field
			name={props.name}
			render={fieldRender}
		/>
	);
};

const InputDatePicker: React.FC<FieldProps<FormikValues> & any> = props => {
	registerLocale('en-gb', enGB);
	const fieldRender = ({ field }: { field: any }) => {
		return <RenderDatePicker {...props} field={field} />;
	};
	return (
		<Field
			name={props.name}
			render={fieldRender}
		/>
	);
};

const RenderDatePicker = (props: any) => (
	<>
		{props.label &&
			<label className='text-capitalize input-label-wrapper'>
				{props.label}
				{props.asterisk && <span className='required'>*</span>}
			</label>}
		<DatePicker
			{...props.field}
			todayButton={'Today'}
			inline={props.inline}
			className='form-control custom-datepicker'
			autoComplete='off'
			locale='en-gb'
			placeholderText={props.placeHolder || ''}
			selected={props.field.value && new Date(props.field.value)}
			onChange={props.onChange}
			showMonthDropdown
			showYearDropdown
			showTimeSelect={props.showTimeSelect ? true : false}
			minDate={props.minDate}
			maxDate={props.maxDate}
			timeFormat={props.timeFormat || 'p'}
			timeIntervals={props.timeIntervals || 15}
			dateFormat={props.dateFormat || 'Pp'}
			dropdownMode='select'
			fixedHeight
		/>
		<ErrorMessage name={props.name} component={FieldErrorMessage} />
	</>
);

/**
 * getCheckboxValue - returns check box value, after changing value with change event of html input element
 * @param field - field returned by formik
 * @param evt - html input change event, linked with checkbox input
 */
const getCheckboxValue = (field: any, evt: React.ChangeEvent<HTMLInputElement>) => {
	// if field value is empty, or null initially, assign it as empty array of strings
	if (!field.value) {
		field.value = [];
	}
	const index = field.value.indexOf(evt.target.value.toString());
	// if event gives `checked` = true, push target value to field value
	if (evt.target.checked) {
		field.value.push(evt.target.value.toString());
	} else if (index !== -1) {
		// else remove target value from field value
		field.value.splice(index, 1);
	}
	// return value
	return field.value;
};

const geDropDownOptions = (config: FieldConfig) => {
	return ((config.otherOptions || {}).dropDownOptions || []);
};

const geCheckboxOptions = (config: FieldConfig) => {
	return ((config.otherOptions || {}).checkboxOptions || []);
};

const getValue = (value?: string | number) => {
	if (value === undefined || value === null) {
		return '';
	}
	return value;
};

export {
	Input,
	InputDatePicker
};
