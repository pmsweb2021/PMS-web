import React from 'react';

interface Props {
    vehicleList: any[];
}

const VehicleList: React.FC<Props> = (props) => {
    const { vehicleList } = props;
    return (
        <div className='vehicle-list'>
            {vehicleList.map((vehicleDetail: any, index: number) => (
                <div className='vehicle-detail' key={index}>
                    <h2 className='mt-0'>Vehicle - {index + 1}</h2>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
                            <p>Make -  <b>{vehicleDetail.make}</b></p>
                            <p>Model -  <b>{vehicleDetail.model}</b></p>
                            <p>Reg No -  <b>{vehicleDetail.regNo}</b></p>
                            <p>Vehicle Type -  <b>{vehicleDetail.vehicleType}</b></p>
                            <p>Category -  <b>{vehicleDetail.category}</b></p>
                            <p>CoverType -  <b>{vehicleDetail.coverType}</b></p>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
                            <p>WindScreen -  <b>{vehicleDetail.windScreen}</b></p>
                            <p>CC -  <b>{vehicleDetail.cc}</b></p>
                            <p>Manufactured -  <b>{vehicleDetail.manufactured}</b></p>
                            <p>Gross Weight -  <b>{vehicleDetail.weight}</b></p>
                            <p>Sum Insured -  <b>{vehicleDetail.sumInsured}</b></p>
                            <p>Registered Owner -  <b>{vehicleDetail.owner}</b></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VehicleList;