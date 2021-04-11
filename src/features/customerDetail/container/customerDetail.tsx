import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { TableTitle } from 'shared/components/table';
import { firstLevelBreadcrumbs } from 'shared/constants/constants';
import Header from 'shared/components/header/header';
import CustomerDetailForm from '../component/customerDetailForm';
import CustomerDetailList from '../component/customerDetailList';
import Button from 'shared/components/form/button';
import Modal from 'shared/components/modal/modal';
import CustomerDetailModal from '../component/customerDetailModal';


interface UIState {
    loading: boolean;
    addDetail: boolean;
    customerDetailList: any;
    isModalOpen: boolean;
    actionType: string;
    selectedCustomer: string;
}

class CustomerDetail extends Component<RouteComponentProps> {
    state: UIState = {
        loading: false,
        addDetail: false,
        customerDetailList: [],
        isModalOpen: false,
        actionType: '',
        selectedCustomer: ''
    }

    render () {
        const { addDetail, customerDetailList, loading, actionType, isModalOpen, selectedCustomer } = this.state;
        
        return (
            <>
                <Header data={firstLevelBreadcrumbs} title={`${addDetail ? 'Add Customer' : 'Customer Detail List' }`}>
                    {!addDetail &&
                        <div className='breadcrumb-btn'>
                            <Button className='mr-2' btnType='primary' onClick={() => this.setState({ addDetail: true })}>
                                Add Customer
                            </Button>
                        </div>
                    }
                </Header>
				<div className='row mt-3'>
					<div className='col-lg-12'>
						<div className='ibox float-e-margins'>
							<TableTitle title={`${addDetail ? 'Add Customer' : 'Customer Details' }`} className='text-capitalize' />

							<div className='ibox-content'>
                                {addDetail && 
                                    <CustomerDetailForm
                                        loading={this.state.loading}
                                        handleSubmit={this.handleSubmit}
                                        handelReset={() => this.setState({ addDetail: false })}
                                    />
                                }
                                {!addDetail &&
                                    <CustomerDetailList
                                        customerDetailList = {customerDetailList}
                                        loading= {loading}
                                        changeActionType={this.changeActionType}
                                    />
                                }
                                
                                {actionType === 'view' && isModalOpen && 
                                    <Modal
                                        show={true}
                                        modalTitle='Customer Detail'
                                        handleClose={this.handleCloseModel}
                                    >
                                        <CustomerDetailModal
                                            customerDetail ={customerDetailList[selectedCustomer]}
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
        const customerDetailList = this.state.customerDetailList;
        customerDetailList.push(values)

        this.setState({ customerDetailList, addDetail: false })
    }

    changeActionType = (actionType: string, selectedCustomer: any) => {
        this.setState({ isModalOpen: true, actionType, selectedCustomer})
    }

    handleCloseModel = () => this.setState({ isModalOpen: false, actionType: ''});
}

export default withRouter(CustomerDetail);