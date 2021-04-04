import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Spinner from 'shared/components/spinner/spinner';
import { UserProfileResponse } from 'features/login/interface/login.interface';
// import { PbTable, PbHead, PbRow, PbBody, TableEmptyContainer, TableSpinner, PbCell } from 'shared/components/table';

const userStatus: { [key: number]: string } = {
	0: 'inactive',
	1: 'active'
}

interface Props {
	userData: UserProfileResponse;
	loading: boolean;
	handleUpdateProfile: () => void;
}


const Profile: React.FC<Props> = (props) => {
	if (isEmpty(props.userData)) {
		return null;
	}

	// const permissions = Object.keys(props.userData.user.permissions);
	return (
		<div className='row'>
			<div className='cols-xs-12 col-sm-12 col-md-12 col-lg-12'>
				<div className='custom-card'>
					<div className='card-heading d-flex'>
						<h4>Profile</h4>
						<div data-testid='edit-profile' className='edit-profile-btn' onClick={props.handleUpdateProfile}>
							<i className='fa fa-pencil' />
						</div>
					</div>
					{props.loading ? <Spinner /> :
						<div className='card-description-wrapper'>
							<div className='desc-item d-flex align-items-center'>
								<label>Name:</label>
								<p>{props.userData.user.name}</p>
							</div>
							<div className='desc-item d-flex align-items-center'>
								<label>Email:</label>
								<p>{props.userData.user.email}</p>
							</div>
							<div className='desc-item d-flex align-items-center'>
								<label>Role:</label>
								<p>{props.userData.user.roles.join(', ')}</p>
							</div>
							<div className='desc-item d-flex align-items-center'>
								<label>Status:</label>
								<p>{userStatus[props.userData.user.status]}</p>
							</div>
						</div>}
				</div>
			</div>
		</div>
	)
}

export default Profile;
