import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';
import enGB from 'date-fns/locale/en-GB';
import FieldErrorMessage from './error';
import Button from 'shared/components/form/button';
registerLocale('en-gb', enGB);

interface TextFieldProps {
	name: string;
	label: string;
	date?: string;
	placeHolder?: string;
	inline?: boolean;
	setFieldValue: (field: string, value: any) => void;
}
const DatePickerInput: React.FC<TextFieldProps> = props => {
	const fieldRender = ({ field }: { field: any }) => {
		const selectDate = (date: Date) => {
			return props.setFieldValue(props.name, date);
		};

		return (
			<>
				<div className='datepicker-input-wrapper'>
					<label className='input-label-wrapper'>{props.label} : </label>
					<div className='custom-datepicker'>
						<DatePicker
							todayButton={'Today'}
							inline={props.inline}
							className='form-control'
							autoComplete='off'
							locale='en-gb'
							{...field}
							placeholderText={props.placeHolder || ''}
							selected={field.value}
							onChange={date => {
								props.setFieldValue(props.name, date);
							}}
							showMonthDropdown
							showYearDropdown
							dropdownMode='select'
							fixedHeight
						/>
					</div>
					<div className='datepicker-actions ml-20'>
						<Button
							className='width-100px'
							onClick={() => {
								const dt = !!props.date ? new Date(props.date) : new Date();
								selectDate(new Date(dt.setDate(dt.getDate() + 7)));
							}}
							type='button'>+1 Week </Button>
						<Button
							className='width-100px'
							onClick={() => {
								const dt = !!props.date ? new Date(props.date) : new Date();
								selectDate(new Date(dt.setDate(dt.getDate() + 14)));
							}}
							type='button'>+2 Weeks </Button>
						<Button
							className='width-100px'
							onClick={() => {
								const dt = !!props.date ? new Date(props.date) : new Date();
								selectDate(new Date(dt.setMonth(dt.getMonth() + 1)));
							}}
							type='button'>+1 Month </Button>
						<Button
							className='width-100px'
							onClick={() => {
								const dt = !!props.date ? new Date(props.date) : new Date();
								selectDate(new Date(dt.setFullYear(dt.getFullYear() + 1)));
							}}
							type='button'>+1 Year </Button>
					</div>
				</div>
				<ErrorMessage name={props.name} component={FieldErrorMessage} />
			</>
		);
	};

	return (
		<Field
			name={props.name}
			render={fieldRender}
		/>
	);
};

export {
	DatePickerInput,
};
