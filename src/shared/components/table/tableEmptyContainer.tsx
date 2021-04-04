import React from 'react';
import EmptyDataContainer from '../emptyDataContainer/emptyDataContainer';
import PbRow from './PbRow';
import PbCell from './PbCell';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	text?: string;
	colSpan: number;
}

const TableEmptyContainer: React.FC<Props> = (props) => (
	<PbRow>
		<PbCell colSpan={props.colSpan}>
			<EmptyDataContainer
				text={props.text} />
		</PbCell>
	</PbRow>
)

export default TableEmptyContainer;
