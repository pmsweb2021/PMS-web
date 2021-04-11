import React from 'react';

interface Props {
    companyDetail: any;
}

const CompanyDetailModal: React .FC<Props> = (props) => (
    <div className='row'>
        <p>Company Name -  <b>{props.companyDetail.companyName}</b></p>
        <p>Company Occupation -  <b>{props.companyDetail.companyOccupation}</b></p>
        
        <div className='card'>
            <div className='d-flex'>
                <p className='font-bold'>Company Address 1 - </p>
                <p>{props.companyDetail.companyAdd1}</p>
            </div>
            <div className='d-flex'>
                <p className='font-bold'>UK Address 1 - </p>
                <p>{props.companyDetail.UKAddress1}</p>
            </div>
        </div>
        <div className='card'>
            <div className='d-flex'>
                <p className='font-bold'>Company Address 2 - </p>
                <p>{props.companyDetail.companyAdd2}</p>
            </div>
            <div className='d-flex'>
                <p className='font-bold'>UK Address 2 - </p>
                <p>{props.companyDetail.UKAddress2}</p>
            </div>
        </div>
        <div className='card'>
            <div className='d-flex'>
                <p className='font-bold'>Company Address 3 - </p>
                <p>{props.companyDetail.companyAdd3}</p>
            </div>
            <div className='d-flex'>
                <p className='font-bold'>UK Address 3 - </p>
                <p>{props.companyDetail.UKAddress3}</p>
            </div>
        </div>
        <div className='card'>
            <div className='d-flex'>
                <p className='font-bold'>Company Address 4 - </p>
                <p>{props.companyDetail.companyAdd4}</p>
            </div>
            <div className='d-flex'>
                <p className='font-bold'>UK Address 4 - </p>
                <p>{props.companyDetail.UKAddress4}</p>
            </div>
        </div>
    </div>    
)

export default CompanyDetailModal;