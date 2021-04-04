import * as React from 'react';

interface Props {
	className?: string;
	header?: JSX.Element;
	title?: string;
	// chindren contains 2 elements
	children: JSX.Element[];
}

const PbTable: React.FC<Props> = (props) => {
	return (
		<div className='table-responsive'>
			<table className={['table table-bordered table-hover dataTables-example dataTable', props.className].join(' ')}>
				{/** first children must be Table Head */}
				{props.children[0]}
				{/** second children must be Table Body */}
				{props.children[1]}
			</table>
		</div>
	);
}

interface TableTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
}

const TableTitle = (props: TableTitleProps) => (
	<div className={[props.className, 'ibox-title'].join(' ')}>
		<h5 data-testid='module-title'>{props.title}</h5>
		<div className='justify-content-space-between'>
			{props.children}
		</div>
	</div>
)

export default PbTable;

export { TableTitle }
