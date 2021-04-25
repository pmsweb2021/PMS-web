import React from 'react';
import VehicleList from './vehicleList';

interface Props {
    quotationDetail: any;
}

const quotationDetailModal: React .FC<Props> = (props) => (
    <>
    <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
            <p>status -  <b>{props.quotationDetail.status}</b></p>
            <p>reference Number -  <b>{props.quotationDetail.referenceNumber}</b></p>
            <p>Contact Person -  <b>{props.quotationDetail.contactPerson}</b></p>
            <p>Quote Type -  <b>{props.quotationDetail.quoteType}</b></p>
            <p>Policy Type -  <b>{props.quotationDetail.policyType}</b></p>
            <p>Payment Method -  <b>{props.quotationDetail.paymentMethod}</b></p>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
            <p>Broker Information -  <b>{props.quotationDetail.brokerInformation}</b></p>
            <p>Brokg Type -  <b>{props.quotationDetail.brokgType}</b></p>
            <p>brokerage -  <b>{props.quotationDetail.brokerage}</b></p>
            <p>SAP No -  <b>{props.quotationDetail.SAPno}</b></p>
            <p>insYear -  <b>{props.quotationDetail.insYear}</b></p>
            <p>govLevy -  <b>{props.quotationDetail.govLevy}</b></p>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-20'>
            <p>Quote Date -  <b>{`${props.quotationDetail.quoteDate}`}</b></p>
            <p>Accepted Date -  <b>{`${new Date(props.quotationDetail.acceptedDate)}`}</b></p>
            <p>Policy Start date -  <b>{`${props.quotationDetail.policyStartDate}`}</b></p>
            <p>proposedInceptionDate -  <b>{`${new Date(props.quotationDetail.proposedInceptionDate)}`}</b></p>
            <p>proposed End date -  <b>{`${props.quotationDetail.proposedEndDate}`}</b></p>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <p> notes:</p>
            <p>{props.quotationDetail.notes}</p>
        </div>
    </div> 
    
    <h2>Vehicle Detail</h2>
    <VehicleList
        vehicleList={props.quotationDetail.vehicleList}
    />
    </>
)

export default quotationDetailModal;