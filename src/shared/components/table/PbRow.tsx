import React from 'react'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	'data-testid'?: string;
}

const PbRow: React.FC<Props> = (props) => {
	return (
		<tr {...props}>
			{props.children}
		</tr>
	)
}

export default PbRow
