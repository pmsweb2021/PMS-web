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

const DropDownOptions = [
	{ name: 'ENERGY', value: 'ENERGY' },
	{ name: 'QUESTION', value: 'QUESTION' },
];


const CustomerDetailForm: React.FC<Props> = (props) => {
    const initialValues = {
        companyId: '',
        contactTitle: '',
        jobTitle: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        contactMobile: '',
        NFDUserId: '',
        NFDUserPassword: '',
        emailAddress: '',
        optOutOfPostalContact: false,
        optOutOfPhoneFax: false,
        optOutOfEmailsSMS: false,
        consentToUpdateNFD: false,
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

                            <div className='form-group col-xs-12 col-sm-12 col-md-6'>
                                <Input
                                    type='dropdown'
                                    name='companyId'
                                    placeholder='Company ID'
                                    showLabels
                                    setFieldValue={setFieldValue}
                                    config={{ type: 'dropdown', label: 'Company ID', name: 'companyId', otherOptions: { dropDownOptions: DropDownOptions } }}
                                />
                            </div>

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

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <div className='checkbox-content'>
                                    <label className='text-capitalize input-label-wrapper d-block   full-width'>optOutOfPostalContact</label>
                                    <label className='switch no-margins' >
                                        <input
                                            placeholder={'switch'}
                                            type='checkbox'
                                            onChange={() => setFieldValue('optOutOfPostalContact',!values.optOutOfPostalContact)}
                                        />
                                        <small />
                                    </label>
                                </div>
                                <ErrorMessage name='mediaContent.optOutOfPostalContact' component={FieldErrorMessage} />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <div className='checkbox-content'>
                                    <label className='text-capitalize input-label-wrapper d-block   full-width'>optOutOfPhoneFax</label>
                                    <label className='switch no-margins' >
                                        <input
                                            placeholder={'switch'}
                                            type='checkbox'
                                            onChange={() => setFieldValue('optOutOfPhoneFax',!values.optOutOfPhoneFax)}
                                        />
                                        <small />
                                    </label>
                                </div>
                                <ErrorMessage name='mediaContent.optOutOfPhoneFax' component={FieldErrorMessage} />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <div className='checkbox-content'>
                                    <label className='text-capitalize input-label-wrapper d-block   full-width'>optOutOfEmailsSMS</label>
                                    <label className='switch no-margins' >
                                        <input
                                            placeholder={'switch'}
                                            type='checkbox'
                                            onChange={() => setFieldValue('optOutOfEmailsSMS',!values.optOutOfEmailsSMS)}
                                        />
                                        <small />
                                    </label>
                                </div>
                                <ErrorMessage name='mediaContent.optOutOfEmailsSMS' component={FieldErrorMessage} />
                            </div>

                            <div className='form-group col-xs-12 col-sm-6 col-md-3'>
                                <div className='checkbox-content'>
                                    <label className='text-capitalize input-label-wrapper d-block   full-width'>consentToUpdateNFD</label>
                                    <label className='switch no-margins' >
                                        <input
                                            placeholder={'switch'}
                                            type='checkbox'
                                            onChange={() => setFieldValue('consentToUpdateNFD',!values.consentToUpdateNFD)}
                                        />
                                        <small />
                                    </label>
                                </div>
                                <ErrorMessage name='mediaContent.consentToUpdateNFD' component={FieldErrorMessage} />
                            </div>
							
							<div className='col-xs-12 col-sm-12 col-md-12 mt-5'>
								<Button className='' type='submit' disabled={props.loading} btnType='primary'>Add Customer Detail</Button>

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
    companyId: Yup.string().required(errorMessages.required('companyId')).strict(true),
    contactTitle: Yup.string().required(errorMessages.required('contactTitle')).strict(true),
    jobTitle: Yup.string().required(errorMessages.required('jobTitle')).strict(true),
    firstName: Yup.string().required(errorMessages.required('firstName')).strict(true),
    lastName: Yup.string().required(errorMessages.required('lastName')).strict(true),
    phoneNumber: Yup.number().required(errorMessages.required('phoneNumber')).strict(true),
    contactMobile: Yup.number().required(errorMessages.required('contactMobile')).strict(true),
    NFDUserId: Yup.string().required(errorMessages.required('NFDUserId')).strict(true),
    NFDUserPassword: Yup.string()
		.required(errorMessages.required('NFDUserPassword')).strict(true)
		.matches(/(?=.*\d)(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/, errorMessages.customPasswordMessage),
    emailAddress: Yup.string()
        .email('Invalid email')
        .required(errorMessages.required('Email Address')),
})

export default CustomerDetailForm;

const INPUTFIELDS = [ 
    { key: 'contactTitle', type: 'text', placeHolder: 'Contact Title' }, 
    { key: 'jobTitle', type: 'text', placeHolder: 'Job Title' }, 
    { key: 'firstName', type: 'text', placeHolder: 'First Name' }, 
    { key: 'lastName', type: 'text', placeHolder: 'Last Name' }, 
    { key: 'phoneNumber', type: 'number', placeHolder: 'Phone Number' }, 
    { key: 'contactMobile', type: 'number', placeHolder: 'Contact Mobile' }, 
    { key: 'NFDUserId', type: 'text', placeHolder: 'NFD User ID' }, 
    { key: 'NFDUserPassword', type: 'text', placeHolder: 'NFD User Password' }, 
    { key: 'emailAddress', type: 'text', placeHolder: 'Email Address' }
]
