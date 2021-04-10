import React from 'react';
import Button from 'shared/components/form/button';
import { PbBody, PbCell, PbHead, PbRow, PbTable, TableEmptyContainer, TableSpinner } from 'shared/components/table';

interface Props {
    customerDetailList: [];
    loading: boolean;
    changeActionType: (actinTpe: string, selectedCustomer: string) => void;
}

const CustomerDetailList: React.FC<Props> = (props) => {
    return (
        <PbTable>
			<PbHead>
				<PbRow>
					<PbCell style={{ width: '25px' }} header>No.</PbCell>
					<PbCell header>Company ID</PbCell>
					<PbCell header>Name</PbCell>
					<PbCell header>Job title</PbCell>
					<PbCell className='text-center' style={{ width: '200px' }} header>Actions</PbCell>
				</PbRow>
			</PbHead>
			<PbBody>
				{props.loading && <TableSpinner colSpan={5} />}
				{!props.loading && !props.customerDetailList.length && <TableEmptyContainer colSpan={5} text={`No customerDetailList content found`} />}
				{!props.loading && props.customerDetailList.length > 0 && 
                    props.customerDetailList.map((customerDetail: any, index: number) => {
                        return (
                            <PbRow key={index}>
                                <PbCell>{index + 1}</PbCell>
                                <PbCell>{customerDetail.companyId}</PbCell>
                                <PbCell>{`${customerDetail.firstName} ${customerDetail.lastName}`}</PbCell>
                                <PbCell>{customerDetail.jobTitle}</PbCell>
                    
                                <PbCell className='text-center'>
                                    <Button
                                        abbr='View'
                                        className='action-btn'
                                        btnType='primary'
                                        onClick={() => props.changeActionType('view', `${index}`)}
                                    >
                                        <i className='fa fa-eye' />
                                    </Button>
                                </PbCell>
                            </PbRow>
                        )
                    })
                }
			</PbBody>
		</PbTable>
    )
}

export default CustomerDetailList;