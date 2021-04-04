import React, { MouseEventHandler, CSSProperties } from 'react';
import classnames from 'classnames';

interface ButtonProps {
	btnType?: 'default' | 'primary' | 'warning' | 'danger' | 'info';
	loading?: boolean;
	disabled?: boolean;
	type?: 'submit' | 'button' | 'reset';
	className?: string;
	onClick?: MouseEventHandler<any>;
	abbr?: string;
	title?: string;
	style?: CSSProperties;
	dataTestId?: string;
}
const Button: React.FC<ButtonProps> = props => {
	const onClick: MouseEventHandler<any> = e => !props.loading && props.onClick && props.onClick(e);
	const button = (
		<button
			data-testid={props.dataTestId || null}
			title={props.abbr || ''}
			type={props.type}
			className={classnames('btn', `btn-${props.btnType || 'default'}`, 'text-capitalize', props.className)}
			disabled={props.loading || props.disabled}
			style={props.style || {}}
			onClick={!props.disabled && !props.loading ? onClick : () => { }}
		>
			{
				props.loading ?
					<i className='fa fa-spin fa-spinner' />
					:
					typeof props.children === 'string' ? props.children : props.children
			}
		</button>
	);
	return (
		props.abbr ? (
			<abbr title={props.abbr || ''} className='custom-abbr'>
				{button}
			</abbr>
		) : button
	);
};

export default Button;
