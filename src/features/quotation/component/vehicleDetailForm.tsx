import React, { useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import Button from 'shared/components/form/button';
import FieldErrorMessage from 'shared/components/form/error';
import { Input, InputDatePicker } from 'shared/components/form/inputTypes';
import Spinner from 'shared/components/spinner/spinner';
import { errorMessages } from 'shared/constants/messages';
import Modal from 'shared/components/modal/modal';

interface Props {
    loading: boolean
    handleSubmit: (initialValues: any) => void;
    handelReset: () => void;
    isModalOpen: boolean;
    closeModal: () => void;
}

const DropDownOptions = [
	{ name: 'ONE', value: 'ONE' },
	{ name: 'TWO', value: 'TWO' },
	{ name: 'THREE', value: 'THREE' },
	{ name: 'FOUR', value: 'FOUR' },
];

const VehicleDetailForm: React.FC<Props> = (props) => {
    const { isModalOpen, closeModal } = props;
    const initialValues = {
        make: '',
        model: '',
        regNo: '',
        vehicleType: '',
        category: '',
        coverType: '',
        windScreen: '',
        cc: '',
        manufactured: '',
        weight: '',
        sumInsured: '',
        owner: ''
    };
    return (
        <Modal
            show={isModalOpen}
            modalTitle='Vehicle Detail'
            handleClose={closeModal}
            className='vehicle-detail'
        >
            <Formik
                initialValues={initialValues}
                onSubmit={(initialValues) => props.handleSubmit(initialValues)}
                validationSchema={formValidation}
            >
                {({ handleSubmit, setFieldValue, values}) => (
                    <form onSubmit={handleSubmit} className='media-form'>
                        <fieldset className='row'>
                            {props.loading && <div className='form-loading d-flex justify-content-center align-items--center'>
                                <Spinner />
                            </div>}
                            <div className='col-xs-12 col-sm-12 col-md-12'>
                                <h2 className='mt-0'>Add Vehicle</h2>

                                <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                    <Input
                                        type='text'
                                        name='model'
                                        placeholder='Model'
                                        showLabels
                                        setFieldValue={setFieldValue}
                                        config={{ type: 'text', label: 'Model', name: 'model'}}
                                    />
                                    <ErrorMessage name={`mediaContent.model`} component={FieldErrorMessage} />
                                </div>
                                <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                    <Input
                                        type='text'
                                        name='regNo'
                                        placeholder='Reg No'
                                        showLabels
                                        setFieldValue={setFieldValue}
                                        config={{ type: 'text', label: 'Reg No', name: 'regNo'}}
                                    />
                                    <ErrorMessage name={`mediaContent.regNo`} component={FieldErrorMessage} />
                                </div>

                                {VEHICLESELECT.map((vehicle: any, index: number) => (
                                    <div className='form-group col-xs-12 col-sm-6 col-md-3' key={vehicle.name}>
                                    <Input
                                        type='dropdown'
                                        name={vehicle.name}
                                        placeholder={vehicle.placeHolder}
                                        showLabels
                                        setFieldValue={setFieldValue}
                                        config={{ type: 'dropdown', label: vehicle.placeHolder, name: vehicle.name, otherOptions: { dropDownOptions: DropDownOptions } }}
                                    />
                                </div>
                                ))}
                                {VEHICLETEXTBOX.map((vehicle: any) => (
                                    <div className='form-group col-xs-12 col-sm-6 col-md-3' key={vehicle.name}>
                                        <Input
                                            type={vehicle.type}
                                            name={vehicle.name}
                                            placeholder={vehicle.placeHolder}
                                            showLabels
                                            setFieldValue={setFieldValue}
                                            config={{ type: vehicle.type, label: vehicle.placeHolder, name: vehicle.name }}
                                        />
                                        <ErrorMessage name={`mediaContent.regNo`} component={FieldErrorMessage} />
                                    </div>
                                ))
                                }
                            </div>

                            <div className='col-xs-12 col-sm-12 col-md-12 mt-5'>
                                <Button className='' type='submit' disabled={props.loading} btnType='primary'>Generate Quotation</Button>
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
        </Modal>
    )
}

const formValidation = Yup.object().shape({
    make: Yup.string().required(errorMessages.required('make')).strict(true),
    model: Yup.string().required(errorMessages.required('model')).strict(true),
    regNo: Yup.string().required(errorMessages.required('regNo')).strict(true),
    vehicleType: Yup.string().required(errorMessages.required('vehicleType')).strict(true),
    category: Yup.string().required(errorMessages.required('category')).strict(true),
    coverType: Yup.string().required(errorMessages.required('coverType')).strict(true),
    windScreen: Yup.string().required(errorMessages.required('windScreen')).strict(true),
    cc: Yup.string().required(errorMessages.required('cc')).strict(true),
    manufactured: Yup.string().required(errorMessages.required('manufactured')).strict(true),
    weight: Yup.string().required(errorMessages.required('weight')).strict(true),
    sumInsured: Yup.string().required(errorMessages.required('sumInsured')).strict(true),
    owner: Yup.string().required(errorMessages.required('owner')).strict(true)
})

export default VehicleDetailForm;


const VEHICLESELECT = [
    {name: 'vehicleType', placeHolder:'Vehicle Type'},
    {name: 'category', placeHolder:'Category'},
    {name: 'coverType', placeHolder:'Cover Type'},
]

const VEHICLETEXTBOX = [
    { type: 'text', name: 'windScreen', placeHolder: 'windScreen' },
    { type: 'text', name: 'cc', placeHolder: 'CC' },
    { type: 'text', name: 'manufactured', placeHolder: 'Manufactured' },
    { type: 'text', name: 'weight', placeHolder: 'Gross Weight' },
    { type: 'text', name: 'sumInsured', placeHolder: 'Sum Insured' },
    { type: 'text', name: 'owner', placeHolder: 'Registered Owner' },
]