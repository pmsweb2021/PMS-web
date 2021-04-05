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
    handlesubmit: (initialValues: any) => void;
}

const PolicyDetailForm: React.FC<Props> = (props) => {
    const initialValues = {
        PolicyName: '',
        PolicyOccupation: '',
        PolicyAdd1: '',
        UKAddress1: '',
        PolicyAdd2: '',
        UKAddress2: '',
        PolicyAdd3: '',
        UKAddress3: '',
        PolicyAdd4: '',
        UKAddress4: '',
    };
    
    return (
        <Formik
				initialValues={initialValues}
				onSubmit={(initialValues) => props.handlesubmit(initialValues)}
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
								<Button className='' type='submit' disabled={props.loading} btnType='primary'>Add Policy Detail</Button>
							</div>
						</fieldset>
					</form>
				)}
			</Formik>
    )
}

const formValidation = Yup.object().shape({
    PolicyName: Yup.string().required(errorMessages.required('PolicyName')).strict(true),
    PolicyOccupation: Yup.string().required(errorMessages.required('PolicyOccupation')).strict(true),
    PolicyAdd1: Yup.string().required(errorMessages.required('PolicyAdd1')).strict(true),
    UKAddress1: Yup.string().required(errorMessages.required('UKAddress1')).strict(true),
    PolicyAdd2: Yup.string().required(errorMessages.required('PolicyAdd2')).strict(true),
    UKAddress2: Yup.string().required(errorMessages.required('UKAddress2')).strict(true),
    PolicyAdd3: Yup.string().required(errorMessages.required('PolicyAdd3')).strict(true),
    UKAddress3: Yup.string().required(errorMessages.required('UKAddress3')).strict(true),
    PolicyAdd4: Yup.string().required(errorMessages.required('PolicyAdd4')).strict(true),
    UKAddress4: Yup.string().required(errorMessages.required('UKAddress4')).strict(true),
})

export default PolicyDetailForm;

const INPUTFIELDS = [ 
    { key: 'PolicyName', type: 'text', placeHolder: 'Policy Name' }, 
    { key: 'PolicyOccupation', type: 'text', placeHolder: 'Policy Occupation' }, 
    { key: 'PolicyAdd1', type: 'text', placeHolder: 'Policy Address 1' }, 
    { key: 'UKAddress1', type: 'text', placeHolder: 'UK Address 1' },
    { key: 'PolicyAdd2', type: 'text', placeHolder: 'Policy Address 2' }, 
    { key: 'UKAddress2', type: 'text', placeHolder: 'UK Address 2' },
    { key: 'PolicyAdd3', type: 'text', placeHolder: 'Policy Address 3' }, 
    { key: 'UKAddress3', type: 'text', placeHolder: 'UK Address 3' },
    { key: 'PolicyAdd4', type: 'text', placeHolder: 'Policy Address 4' }, 
    { key: 'UKAddress4', type: 'text', placeHolder: 'UK Address 4' }, 
]
