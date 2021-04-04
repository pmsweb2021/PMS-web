import React from 'react';

import Spinner from '../spinner/spinner';
import PbRow from './PbRow';
import PbCell from './PbCell';

const TableSpinner: React.FC<{ colSpan: number }> = (props) => (
	<PbRow>
		<PbCell colSpan={props.colSpan}>
			<Spinner />
		</PbCell>
	</PbRow>
)

export default TableSpinner;
