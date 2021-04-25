import React, { useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import Button from 'shared/components/form/button';
import FieldErrorMessage from 'shared/components/form/error';
import { Input, InputDatePicker } from 'shared/components/form/inputTypes';
import Spinner from 'shared/components/spinner/spinner';
import { errorMessages } from 'shared/constants/messages';
import VehicleDetailForm from './vehicleDetailForm';
import VehicleList from './vehicleList';

interface Props {
    loading: boolean
    handleSubmit: (initialValues: any) => void;
    handelReset: () => void;
}

const DropDownOptions = [
	{ name: 'ONE', value: 'ONE' },
	{ name: 'TWO', value: 'TWO' },
	{ name: 'THREE', value: 'THREE' },
	{ name: 'FOUR', value: 'FOUR' },
];

const QuotationForm: React.FC<Props> = (props) => {
    const [isModalOpen, handleModalState] = useState(false);
    const [isError, handleErrorState] = useState(false);
    const [vehicleList, handleVehicleList]= useState([]) as any[]; 

    const initialValues = {
        status : '',
        referenceNumber: '',
        companyName: '',
        contactPerson: '',
        quoteType: '',
        policyType: '',
        quoteDate: '',
        acceptedDate: '',
        proposedInceptionDate: '',
        policyStartDate: '',
        paymentMethod: '',
        proposedEndDate: '',
        brokerInformation:'',
        brokgType: '',
        brokerage: '',
        SAPno: '',
        insYear: '',
        govLevy: '',
        notes: '',
    };

    const addNewVehicle = (params: any) => {
        const oldVehicleList: any[] = vehicleList;
        oldVehicleList.push(params);
        handleVehicleList(oldVehicleList);
        handleModalState(false);
        handleModalState(true);
    }

    const submitVehicleDetail = (params: any) => {
        const oldVehicleList: any[] = vehicleList;
        oldVehicleList.push(params);
        handleVehicleList(oldVehicleList);
        handleModalState(false);
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={(initialValues) => {
                    if (vehicleList.length > 0) {
                        const params: any = initialValues; 
                        params.vehicleList = vehicleList;
                        return props.handleSubmit(params)
                    };
                    
                    return handleErrorState(true);
                }}
                validationSchema={formValidation}
            >
                {({ handleSubmit, setFieldValue,errors,handleChange, values}) => (
                    <form onSubmit={handleSubmit} className='media-form'>
                        <fieldset className='row'>
                            {props.loading && <div className='form-loading d-flex justify-content-center align-items--center'>
                                <Spinner />
                            </div>}

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='text'
                                    name='status'
                                    placeholder='Quote'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'text', label: 'Status', name: 'status'}}
                                />
                                <ErrorMessage name={`mediaContent.status`} component={FieldErrorMessage} />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='text'
                                    name='referenceNumber'
                                    placeholder='Reference Number'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'text', label: 'Reference Number', name: 'referenceNumber'}}
                                />
                                <ErrorMessage name={`mediaContent.referenceNumber`} component={FieldErrorMessage} />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='dropdown'
                                    name='companyName'
                                    placeholder='Company Name'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'dropdown', label: 'Company Name', name: 'companyName', otherOptions: { dropDownOptions: DropDownOptions } }}
                                />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='dropdown'
                                    name='contactPerson'
                                    placeholder='Contact Person'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'dropdown', label: 'Contact Person', name: 'contactPerson', otherOptions: { dropDownOptions: DropDownOptions } }}
                                />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='text'
                                    name='quoteType'
                                    placeholder='Quote Type'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'text', label: 'Quote Type', name: 'quoteType'}}
                                />
                                <ErrorMessage name={`mediaContent.quoteType`} component={FieldErrorMessage} />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='text'
                                    name='policyType'
                                    placeholder='Policy Type'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'text', label: 'Policy Type', name: 'policyType'}}
                                />
                                <ErrorMessage name={`mediaContent.policyType`} component={FieldErrorMessage} />
                            </div>

                            {DATEPICKERS.map((inputItem) => (
                                <div className='form-group col-xs-12 col-sm-6 col-md-3' key={inputItem.key}>
                                    <InputDatePicker
                                        setFieldValue={setFieldValue}
                                        minDate={new Date()}
                                        label={inputItem.placeHolder}
                                        name={inputItem.key}
                                        dateFormat={'MM-dd-yyyy'}
                                        onChange={(date: Date | null) => {
                                            setFieldValue(inputItem.key, date);
                                        }}
                                        placeHolder={inputItem.placeHolder}
                                    />
                                </div>
                            ))}

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='dropdown'
                                    name='paymentMethod'
                                    placeholder='Payment Method'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'dropdown', label: 'Payment Method', name: 'paymentMethod', otherOptions: { dropDownOptions: DropDownOptions } }}
                                />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='dropdown'
                                    name='brokerInformation'
                                    placeholder='Broker Information'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'dropdown', label: 'Broker Information', name: 'brokerInformation', otherOptions: { dropDownOptions: DropDownOptions } }}
                                />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='dropdown'
                                    name='brokgType'
                                    placeholder='Breokg. Type'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'dropdown', label: 'Brokg. Type', name: 'brokgType', otherOptions: { dropDownOptions: DropDownOptions } }}
                                />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='number'
                                    name='brokerage'
                                    placeholder='Brokerage'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'number', label: 'Brokerage', name: 'brokerage'}}
                                />
                                <ErrorMessage name={`mediaContent.brokerage`} component={FieldErrorMessage} />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='number'
                                    name='SAPno'
                                    placeholder='SAP no'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'number', label: 'SAP no', name: 'SAPno'}}
                                />
                                <ErrorMessage name={`mediaContent.brokerage`} component={FieldErrorMessage} />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='number'
                                    name='insYear'
                                    placeholder='ins. Year'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'number', label: 'ins. Year', name: 'insYear'}}
                                />
                                <ErrorMessage name={`mediaContent.insYear`} component={FieldErrorMessage} />
                            </div>
                            
                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <Input
                                    type='number'
                                    name='govLevy'
                                    placeholder='Gov. Levy'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'number', label: 'Gov. Levy', name: 'govLevy'}}
                                />
                                <ErrorMessage name={`mediaContent.brokerage`} component={FieldErrorMessage} />
                            </div>

                            <div className='form-group col-xs-12 col-sm-12 col-md-12'>
                                <Input
                                    type='textarea'
                                    name={'notes'}
                                    placeholder={'Notes'}
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'text', label: 'Notes', name: 'notes' }}
                                />
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-12 mt-5'>
                                <div className='col-xs-12 col-sm-12 col-md-4'>
                                    <div className='d-flex align-items-center justify-content-space-between'>
                                        <h2>Vehicle Detail</h2>
                                        <Button 
                                            className=''
                                            disabled={props.loading} 
                                            btnType='primary'
                                            onClick={() => handleModalState(true)}
                                        >
                                            Add Vehicle
                                        </Button>
                                    </div>
                                    {vehicleList.length === 0 && isError && <p className='error'>Please Add at least one Vehicle.</p>}
                                   
                                </div>
                                {vehicleList.length > 0 &&
                                    <VehicleList
                                        vehicleList = {vehicleList}
                                    />
                                }
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-12 mt-5'>
                                <Button 
                                    className=''
                                    type='submit'
                                    disabled={props.loading} 
                                    btnType='primary'
                                    onClick={() => {
                                        if (vehicleList.length === 0) {
                                            handleErrorState(true);
                                        };
                                    }}
                                >
                                    Generate Quotation
                                    </Button>
                                <Button
                                    className='ml-20'
                                    type='button'
                                    disabled={props.loading}
                                    btnType='danger'
                                    onClick={props.handelReset}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </fieldset>
                    </form>
                )}
            </Formik>
            <VehicleDetailForm
                loading= {false}
                isModalOpen= {isModalOpen}
                closeModal= {() => handleModalState(false)}
                vehicleList= {vehicleList}
                addNewVehicle= {addNewVehicle}
                submitVehicleDetail= {submitVehicleDetail}
            />
        </>
    )
}

const formValidation = Yup.object().shape({
    status: Yup.string().required(errorMessages.required('status')).strict(true),
    referenceNumber: Yup.string().required(errorMessages.required('referenceNumber')).strict(true),
    companyName: Yup.string().required(errorMessages.required('companyName')).strict(true),
    contactPerson: Yup.string().required(errorMessages.required('contactPerson')).strict(true),
    quoteType: Yup.string().required(errorMessages.required('quoteType')).strict(true),
    policyType: Yup.string().required(errorMessages.required('policyType')).strict(true),
    quoteDate: Yup.date().required(errorMessages.required('quoteDate')).strict(true),
    acceptedDate: Yup.date().required(errorMessages.required('acceptedDate')).strict(true),
    proposedInceptionDate: Yup.date().required(errorMessages.required('proposedInceptionDate')).strict(true),
    policyStartDate: Yup.date().required(errorMessages.required('policyStartDate')).strict(true),
    paymentMethod: Yup.string().required(errorMessages.required('paymentMethod')).strict(true),
    proposedEndDate: Yup.date().required(errorMessages.required('proposedEndDate')).strict(true),
    brokerInformation: Yup.string().required(errorMessages.required('brokerInformation')).strict(true),
    brokgType: Yup.string().required(errorMessages.required('brokgType')).strict(true),
    brokerage: Yup.number().required(errorMessages.required('brokerage')).strict(true),
    SAPno: Yup.number().required(errorMessages.required('SAPno')).strict(true),
    insYear: Yup.number().required(errorMessages.required('insYear')).strict(true),
    govLevy: Yup.number().required(errorMessages.required('govLevy')).strict(true),
    notes: Yup.string().required(errorMessages.required('notes')).strict(true),
})


export default QuotationForm;

const DATEPICKERS = [ 
    { key: 'quoteDate',  placeHolder: 'Quote Date' }, 
    { key: 'acceptedDate',  placeHolder: 'Accepted Date' }, 
    { key: 'proposedInceptionDate',  placeHolder: 'proposedInceptionDate' }, 
    { key: 'policyStartDate',  placeHolder: 'Policy start date' },
    { key: 'proposedEndDate',  placeHolder: 'proposed End date' },
]