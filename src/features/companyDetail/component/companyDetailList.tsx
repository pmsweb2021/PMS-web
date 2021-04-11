import React from 'react';
import Button from 'shared/components/form/button';
import { PbBody, PbCell, PbHead, PbRow, PbTable, TableEmptyContainer, TableSpinner } from 'shared/components/table';

interface Props {
    companyDetailList: [];
    loading: boolean;
    changeActionType: (actinTpe: string, selectedCustomer: string) => void;
}

const CompanyDetailList: React.FC<Props> = (props) => {
    return (
        <PbTable>
			<PbHead>
				<PbRow>
					<PbCell style={{ width: '25px' }} header>No.</PbCell>
					<PbCell header>Company Name</PbCell>
					<PbCell header>companyOccupation</PbCell>
					<PbCell className='text-center' style={{ width: '200px' }} header>Actions</PbCell>
				</PbRow>
			</PbHead>
			<PbBody>
				{props.loading && <TableSpinner colSpan={4} />}
				{!props.loading && !props.companyDetailList.length && <TableEmptyContainer colSpan={4} text={`No Company content found`} />}
				{!props.loading && props.companyDetailList.length > 0 && 
                    props.companyDetailList.map((company: any, index: number) => {
                        return (
                            <PbRow key={index}>
                                <PbCell>{index + 1}</PbCell>
                                <PbCell>{company.companyName}</PbCell>
                                <PbCell>{company.companyOccupation}</PbCell>
                    
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

export default CompanyDetailList;