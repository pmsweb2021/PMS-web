import React from 'react';
import Option from '../form/option';
interface Props extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>,
	React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> {

	header?: Boolean;
	onClick?: React.MouseEventHandler<any>;
	input?: Boolean;
	dropDownOptions?: Array<{
		name: string;
		value: string;
	}>;
	inputValue?: string;
	placeholder?: string;
	inputLabel?: string;
	disabled?: boolean;
	onInputChange?: (text: string) => void;
}

const PbCell: React.FC<Props> = props => {
	let html: JSX.Element;
	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		props.onInputChange && props.onInputChange(e.target.value);
	};
	if (props.header) {
		html = (
			<th
				className={`text-capitalize cursor-pointer ${props.className || ''}`}
				onClick={props.onClick}
				colSpan={props.colSpan}
				rowSpan={props.rowSpan}
				style={props.style}
			>
				{typeof props.children === 'string' ? props.children : props.children}
			</th>
		);
	} else if (props.input) {
		html = (
			<td
				className={props.className}
				rowSpan={props.rowSpan}
				colSpan={props.colSpan}
				style={props.style}
			>
				{props.inputLabel ? <label className='mb-3'>{props.inputLabel}</label> : ''}
				{props.dropDownOptions ?
					<select
						placeholder={props.placeholder || ''}
						className='form-control'
						value={props.inputValue}
						onChange={onChangeInput}
						disabled={props.disabled}
					>
						{props.dropDownOptions.map(option => <Option key={option.name}  {...option} />)}
					</select>
					:
					<input
						value={props.inputValue || ''}
						onChange={onChangeInput}
						className='form-control'
						placeholder={props.placeholder || ''}
					/>
				}
			</td>
		);
	} else {
		html = (
			<td
				className={[props.className, 'Cell'].join(' ')}
				colSpan={props.colSpan}
				rowSpan={props.rowSpan}
				style={props.style}
			>
				{props.children}
			</td>
		);
	}

	return html;
};
export default PbCell;
