import React from 'react';

interface Props {
	name: string;
	value: string | number;
}
const Option: React.FC<Props> = (props) => {
	return (
		<option value={props.value}>
			{props.name}
		</option>
	)
}
export default Option;
