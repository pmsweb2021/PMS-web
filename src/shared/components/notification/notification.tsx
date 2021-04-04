import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

interface Props {
	open: boolean;
	message: string;
	type: string;
}

/**
 * Notification - this component uses **react-toastify** to show notification
 * whenever it receives a message from props, and a flag, to toggle it's state, it adds a notification to toastr
 * depending on notification type
 * @param props 
 */
const Notification: React.FC<Props> = (props) => {
	const { open, message, type } = props;
	if (open) {
		// make first letter of msg capital, and the rest as they are
		const msg = `${message[0].toUpperCase()}${message.substr(1)}`
		if (type === 'success') {
			toast.success((msg), { toastId: `${Math.random()}` });
		} else if (type === 'error') {
			toast.error((msg), { toastId: `${Math.random()}` });
		}
	}
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={4000}
			hideProgressBar
			newestOnTop={false}
			closeOnClick
			rtl={false}
			draggable
			pauseOnHover
		/>
	)
}

export default Notification;
