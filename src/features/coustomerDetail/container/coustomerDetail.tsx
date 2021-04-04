import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { TableTitle } from 'shared/components/table';
import { firstLevelBreadcrumbs } from 'shared/constants/constants';
import Header from 'shared/components/header/header';
import CoustomerDetailForm from '../comonent/coustmerDetailForm';

class CoustomerDetail extends Component<RouteComponentProps> {
    state = {
        loading: false,
    }

    render () {
        return (
            <>
                <Header data={firstLevelBreadcrumbs} title='Add Coustomer Detail' />
				<div className='row mt-3'>
					<div className='col-lg-12'>
						<div className='ibox float-e-margins'>
							<TableTitle title={`Add Coustomer detail`} className='text-capitalize' />
							<div className='ibox-content'>
                                <CoustomerDetailForm
                                    loading={this.state.loading}
                                    handlesubmit={this.handleSubmit}
                                />
							</div>
						</div>
					</div>
				</div>
            </>
        )
    }

    handleSubmit= (values: any) => {
        console.log(values,'form submited');
        
    }
}

export default withRouter(CoustomerDetail);