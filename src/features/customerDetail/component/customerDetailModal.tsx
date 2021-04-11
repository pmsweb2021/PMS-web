import React from 'react';

interface Props {
    customerDetail: any;
}

const CustomerDetailModal: React .FC<Props> = (props) => (
    <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
            <p>Company ID -  <b>{props.customerDetail.companyId}</b></p>
            <p>First Name -  <b>{props.customerDetail.firstName}</b></p>
            <p>Last Name -  <b>{props.customerDetail.lastName}</b></p>
            <p>E-mail Address -  <b>{props.customerDetail.emailAddress}</b></p>
            <p>Job Title -  <b>{props.customerDetail.jobTitle}</b></p>
            <p>Contact Title -  <b>{props.customerDetail.contactTitle}</b></p>
            <p>Password -  <b>{props.customerDetail.NFDUserPassword}</b></p>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
            <p>NFD User ID -  <b>{props.customerDetail.NFDUserId}</b></p>
            <p>Phone Number -  <b>{props.customerDetail.phoneNumber}</b></p>
            <p>Mobile -  <b>{props.customerDetail.contactMobile}</b></p>

            <p>consentToUpdateNFD -  <b className={`badge badge-${props.customerDetail.consentToUpdateNFD ? 'success' : 'danger'}`}>{props.customerDetail.consentToUpdateNFD ? 'YES' : 'NO'}</b></p>
            
            <p>optOutOfEmailsSMS -  <b className={`badge badge-${props.customerDetail.optOutOfEmailsSMS ? 'success' : 'danger'}`}>{props.customerDetail.optOutOfEmailsSMS ? 'YES' : 'NO'}</b></p>
            
            <p>optOutOfPhoneFax -  <b className={`badge badge-${props.customerDetail.optOutOfPhoneFax ? 'success' : 'danger'}`}>{props.customerDetail.optOutOfPhoneFax ? 'YES' : 'NO'}</b></p>
            
            <p>optOutOfPostalContact -  <b className={`badge badge-${props.customerDetail.optOutOfPostalContact ? 'success' : 'danger'}`}>{props.customerDetail.optOutOfPostalContact ? 'YES' : 'NO'}</b></p>
        </div>
    </div>    
)

export default CustomerDetailModal;