import React from 'react'

const PbHead: React.FC<{
	dataTestId?: string
}> = (props) => {
	return (
		<thead data-testid={`${props.dataTestId || 'list-column-header'}`}>
			{props.children}
		</thead>
	)
}

export default PbHead;
