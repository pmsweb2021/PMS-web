import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { TableTitle } from 'shared/components/table';
import { firstLevelBreadcrumbs } from 'shared/constants/constants';
import Header from 'shared/components/header/header';
import PolicyDetailForm from '../component/policyDetailForm';
import Button from 'shared/components/form/button';
import PolicyDetailList from '../component/policyDetailList';
import Modal from 'shared/components/modal/modal';
import PolicyDetailModal from '../component/policyDetaillModal';

interface UIState {
    loading: boolean;
    addDetail: boolean;
    policyDetailList: any;
    isModalOpen: boolean;
    actionType: string;
    selectedPolicy: string;
}

class PolicyDetail extends Component<RouteComponentProps> {
    state: UIState = {
        loading: false,
        addDetail: false,
        policyDetailList: [],
        isModalOpen: false,
        actionType: '',
        selectedPolicy: ''
    }

    render () {
        const { loading, actionType, isModalOpen, addDetail, policyDetailList, selectedPolicy } = this.state
        return (
            <>
                <Header data={firstLevelBreadcrumbs} title={`${addDetail ? 'Add Policy' : 'Policy Detail List' }`}>
                {!addDetail &&
                        <div className='breadcrumb-btn'>
                            <Button className='mr-2' btnType='primary' onClick={() => this.setState({ addDetail: true })}>
                                Add Policy
                            </Button>
                        </div>
                    }
                </Header>
				<div className='row mt-3'>
					<div className='col-lg-12'>
						<div className='ibox float-e-margins'>
							<TableTitle title={`Add Policy detail`} className='text-capitalize' />
							<div className='ibox-content'>
                                {addDetail &&
                                    <PolicyDetailForm
                                        loading={this.state.loading}
                                        handlesubmit={this.handleSubmit}
                                    />
                                }

                                {!addDetail &&
                                    <PolicyDetailList
                                        policyDetailList = {policyDetailList}
                                        loading= {loading}
                                        changeActionType={this.changeActionType}
                                    />
                                }
                                

                                {actionType === 'view' && isModalOpen && 
                                    <Modal
                                        show={true}
                                        modalTitle='Company Detail'
                                        handleClose={this.handleCloseModel}
                                    >
                                        <PolicyDetailModal
                                            policyDetail={policyDetailList[selectedPolicy]}
                                        />
                                    </Modal>
                                }
							</div>
						</div>
					</div>
				</div>
            </>
        )
    }

    handleSubmit= (values: any) => {
        const policyDetailList = this.state.policyDetailList;
        policyDetailList.push(values)

        this.setState({ policyDetailList, addDetail: false })
    }

    changeActionType = (actionType: string, selectedPolicy: string) => {
        this.setState({ isModalOpen: true, actionType, selectedPolicy})
    }

    handleCloseModel = () => this.setState({ isModalOpen: false, actionType: ''});
}

export default withRouter(PolicyDetail);