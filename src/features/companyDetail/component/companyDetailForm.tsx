import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import Button from 'shared/components/form/button';
import FieldErrorMessage from 'shared/components/form/error';
import { Input } from 'shared/components/form/inputTypes';
import Spinner from 'shared/components/spinner/spinner';
import { errorMessages } from 'shared/constants/messages';

interface Props {
    loading: boolean
    handleSubmit: (initialValues: any) => void;
    handelReset: () => void;
}

const CompanyDetailForm: React.FC<Props> = (props) => {
    const initialValues = {
        companyName: '',
        companyOccupation: '',
        companyAdd1: '',
        UKAddress1: '',
        companyAdd2: '',
        UKAddress2: '',
        companyAdd3: '',
        UKAddress3: '',
        companyAdd4: '',
        UKAddress4: '',
    };
    
    return (
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

                            {INPUTFIELDS.map((inputItem: any) => (
                                <div className='form-group col-xs-12 col-sm-12 col-md-6' key={inputItem.key}>
                                    <Input
                                        type={inputItem.type}
                                        name={inputItem.key}
                                        placeholder={inputItem.placeHolder}
                                        showLabels
                                        setFieldValue={setFieldValue}
                                        config={{ type: inputItem.type, label: inputItem.placeHolder, name: inputItem.key }}
                                    />
    								<ErrorMessage name={`mediaContent.${inputItem.key}`} component={FieldErrorMessage} />
                                </div>
                            ))}

							<div className='col-xs-12 col-sm-12 col-md-12 mt-5'>
								<Button className='' type='submit' disabled={props.loading} btnType='primary'>Add Company</Button>

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
    )
}

const formValidation = Yup.object().shape({
    companyName: Yup.string().required(errorMessages.required('companyName')).strict(true),
    companyOccupation: Yup.string().required(errorMessages.required('companyOccupation')).strict(true),
    companyAdd1: Yup.string().required(errorMessages.required('companyAdd1')).strict(true),
    UKAddress1: Yup.string().required(errorMessages.required('UKAddress1')).strict(true),
    companyAdd2: Yup.string().required(errorMessages.required('companyAdd2')).strict(true),
    UKAddress2: Yup.string().required(errorMessages.required('UKAddress2')).strict(true),
    companyAdd3: Yup.string().required(errorMessages.required('companyAdd3')).strict(true),
    UKAddress3: Yup.string().required(errorMessages.required('UKAddress3')).strict(true),
    companyAdd4: Yup.string().required(errorMessages.required('companyAdd4')).strict(true),
    UKAddress4: Yup.string().required(errorMessages.required('UKAddress4')).strict(true),
})

export default CompanyDetailForm;

const INPUTFIELDS = [ 
    { key: 'companyName', type: 'text', placeHolder: 'Company Name' }, 
    { key: 'companyOccupation', type: 'text', placeHolder: 'Company Occupation' }, 
    { key: 'companyAdd1', type: 'text', placeHolder: 'Company Address 1' }, 
    { key: 'UKAddress1', type: 'text', placeHolder: 'UK Address 1' },
    { key: 'companyAdd2', type: 'text', placeHolder: 'Company Address 2' }, 
    { key: 'UKAddress2', type: 'text', placeHolder: 'UK Address 2' },
    { key: 'companyAdd3', type: 'text', placeHolder: 'Company Address 3' }, 
    { key: 'UKAddress3', type: 'text', placeHolder: 'UK Address 3' },
    { key: 'companyAdd4', type: 'text', placeHolder: 'Company Address 4' }, 
    { key: 'UKAddress4', type: 'text', placeHolder: 'UK Address 4' }, 
]
