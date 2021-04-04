import React from 'react'
import PbCell from './PbCell';

interface Column {
	sort?: boolean,
	name: string
}

interface Props extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {
	column: Column;
	onSort?: (column: string) => void;
	orderBy: string | null;
	order: string | null;
}

class AdvancedPbHead extends React.Component<Props> {
	render() {
		return (
			<PbCell
				className={[this.props.className, this.getCellClasses(this.props.column)].join(' ')}
				onClick={() => this.onClickCell(this.props.column)}
				header={true}
			>
				{this.props.children}
			</PbCell>
		)
	}

	onClickCell = (column: Column) => {
		if (!column.sort) {
			return;
		}
		this.props.onSort && this.props.onSort(column.name);
	}

	getCellClasses = (column: Column): string => {
		if (!column.sort) {
			return '';
		}
		if (column.sort && this.props.orderBy === column.name) {
			return this.props.order === 'asc' ? 'sorting_asc' : 'sorting_desc'
		} else {
			return 'sorting'
		}
	}
}

export default AdvancedPbHead;
