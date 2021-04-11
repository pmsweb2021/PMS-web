import React from 'react';

interface Props {
    policyDetail: any;
}

const PolicyDetailModal: React .FC<Props> = (props) => (
    <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
            <p>status -  <b>{props.policyDetail.status}</b></p>
            <p>reference Number -  <b>{props.policyDetail.referenceNumber}</b></p>
            <p>Contact Person -  <b>{props.policyDetail.contactPerson}</b></p>
            <p>Quote Type -  <b>{props.policyDetail.quoteType}</b></p>
            <p>Policy Type -  <b>{props.policyDetail.policyType}</b></p>
            <p>Payment Method -  <b>{props.policyDetail.paymentMethod}</b></p>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
            <p>Broker Information -  <b>{props.policyDetail.brokerInformation}</b></p>
            <p>Brokg Type -  <b>{props.policyDetail.brokgType}</b></p>
            <p>brokerage -  <b>{props.policyDetail.brokerage}</b></p>
            <p>SAP No -  <b>{props.policyDetail.SAPno}</b></p>
            <p>insYear -  <b>{props.policyDetail.insYear}</b></p>
            <p>govLevy -  <b>{props.policyDetail.govLevy}</b></p>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-20'>
            <p>Quote Date -  <b>{`${props.policyDetail.quoteDate}`}</b></p>
            <p>Accepted Date -  <b>{`${new Date(props.policyDetail.acceptedDate)}`}</b></p>
            <p>Policy Start date -  <b>{`${props.policyDetail.policyStartDate}`}</b></p>
            <p>proposedInceptionDate -  <b>{`${new Date(props.policyDetail.proposedInceptionDate)}`}</b></p>
            <p>proposed End date -  <b>{`${props.policyDetail.proposedEndDate}`}</b></p>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <p> notes:</p>
            <p>{props.policyDetail.notes}</p>
        </div>
    </div>    
)

export default PolicyDetailModal;

// status : '',
// referenceNumber: '',
// companyName: '',insYear
// contactPerson: '',
// quoteType: '',
// policyType: '',
// quoteDate: '',
// acceptedDate: '',
// proposedInceptionDate: '',
// policyStartDate: '',
// paymentMethod: '',
// proposedEndDate: '',
// brokerInformation:'',
// brokgType: '',
// brokerage: '',
// SAPno: '',
// insYear: '',
// govLevy: '',
// notes: '',