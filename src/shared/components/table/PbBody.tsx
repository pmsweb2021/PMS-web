import React from 'react'

const PbBody: React.FC<{
	'data-testid'?: string;
}> = (props) => {
	return (
		<tbody data-testid={`${props["data-testid"] || 'list-rows'}`}>
			{props.children}
		</tbody>
	)
}

export default PbBody;
