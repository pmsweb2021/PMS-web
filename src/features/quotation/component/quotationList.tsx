import React from 'react';
import Button from 'shared/components/form/button';
import { PbBody, PbCell, PbHead, PbRow, PbTable, TableEmptyContainer, TableSpinner } from 'shared/components/table';

interface Props {
    quotationDetailList: [];
    loading: boolean;
    changeActionType: (actinTpe: string, selectedCustomer: string) => void;
}

const QuotationDetailList: React.FC<Props> = (props) => {
    return (
        <PbTable>
			<PbHead>
				<PbRow>
					<PbCell style={{ width: '25px' }} header>No.</PbCell>
					<PbCell header>Company Name</PbCell>
					<PbCell header>status</PbCell>
					<PbCell header>policyType</PbCell>
					<PbCell className='text-center' style={{ width: '200px' }} header>Actions</PbCell>
				</PbRow>
			</PbHead>
			<PbBody>
				{props.loading && <TableSpinner colSpan={5} />}
				{!props.loading && !props.quotationDetailList.length && <TableEmptyContainer colSpan={5} text={`No Quotation content found`} />}
				{!props.loading && props.quotationDetailList.length > 0 && 
                    props.quotationDetailList.map((company: any, index: number) => {
                        return (
                            <PbRow key={index}>
                                <PbCell>{index + 1}</PbCell>
                                <PbCell>{company.companyName}</PbCell>
                                <PbCell>{company.status}</PbCell>
                                <PbCell>{company.policyType}</PbCell>
                    
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

export default QuotationDetailList;