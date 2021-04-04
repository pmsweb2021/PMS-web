import * as Yup from 'yup';
import { errorMessages } from 'shared/constants/messages';

const loginFormValidationSchema = Yup.object().shape({
	userName: Yup.string()
		.required(errorMessages.required('Username')).strict(true),
	password: Yup.string()
		.required(errorMessages.required('Password')).strict(true)
});

const forgetPasswordValidationSchema = Yup.object().shape({
	email: Yup.string().email()
		.required(errorMessages.required('Email')).strict(true),
});

const resetPasswordValidationSchema = Yup.object().shape({
	// email: Yup.string().email()
	// 	.required(errorMessages.required('email')).strict(true),
	password: Yup.string().min(8, errorMessages.minLength('New Password', 8))
		.required(errorMessages.required('New Password')).strict(true),
	password_confirmation: Yup.string().min(8, errorMessages.minLength('Password Confirmation', 8))
		.required(errorMessages.required('Password Confirmation')).strict(true)
		.test('match', errorMessages.passwordMatchValidate(), function (password) {
			return password === this.parent.password;
		})
});

const changePasswordValidationSchema = Yup.object().shape({
	old_password: Yup.string().required(errorMessages.required('Old Password')).strict(true),
	new_password: Yup.string().min(8, errorMessages.minLength('Old Password', 8))
		.required(errorMessages.required('New Password')).strict(true),
	new_password_confirmation: Yup.string().min(8, errorMessages.minLength('Password Confirmation', 8))
		.required(errorMessages.required('Password Confirmation')).strict(true)
		.test('match', errorMessages.passwordMatchValidate(), function (password) {
			return password === this.parent.new_password;
		})
});

const updateProfileValidationSchema = Yup.object().shape({
	name: Yup.string().required(errorMessages.required('Name')).strict(true),
	email: Yup.string().email()
		.required(errorMessages.required('Email')).strict(true)
});

const mediaFormValidationSchema = Yup.object().shape({
	postType: Yup.string().required(errorMessages.required('Post Type')).strict(true),
	mediaContent: Yup.object().shape({
		title: Yup.string().required(errorMessages.required('Title')).strict(true),
		subTitle: Yup.string().required(errorMessages.required('Sub Title')).strict(true),
		descriptionTitle: Yup.string().required(errorMessages.required('Description Title')).strict(true),
		description: Yup.string().required(errorMessages.required('Description')).strict(true),
		media: Yup.array().required(errorMessages.required('Media image / video')).strict(true),
	})
});

export {
	loginFormValidationSchema,
	forgetPasswordValidationSchema,
	resetPasswordValidationSchema,
	changePasswordValidationSchema,
	updateProfileValidationSchema,
	mediaFormValidationSchema,
};
