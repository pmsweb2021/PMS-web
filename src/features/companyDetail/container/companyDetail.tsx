import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { TableTitle } from 'shared/components/table';
import { firstLevelBreadcrumbs } from 'shared/constants/constants';
import Header from 'shared/components/header/header';
import CompanyDetailForm from '../component/companyDetailForm';
import Modal from 'shared/components/modal/modal';
import CompanyDetailModal from '../component/companyDetailModal';
import CompanyDetailList from '../component/companyDetailList';
import Button from 'shared/components/form/button';


interface UIState {
    loading: boolean;
    addDetail: boolean;
    companyDetailList: any;
    isModalOpen: boolean;
    actionType: string;
    selectedCompany: string;
}

class CompanyDetail extends Component<RouteComponentProps> {
    state: UIState = {
        loading: false,
        addDetail: false,
        companyDetailList: [],
        isModalOpen: false,
        actionType: '',
        selectedCompany: ''
    }

    render () {
        const { loading, addDetail, companyDetailList, isModalOpen, actionType, selectedCompany } = this.state
        return (
            <>
                <Header data={firstLevelBreadcrumbs} title={`${addDetail ? 'Add Company' : 'Company Detail List' }`}>
                {!addDetail &&
                        <div className='breadcrumb-btn'>
                            <Button className='mr-2' btnType='primary' onClick={() => this.setState({ addDetail: true })}>
                                Add Company
                            </Button>
                        </div>
                    }
                </Header>
				<div className='row mt-3'>
					<div className='col-lg-12'>
						<div className='ibox float-e-margins'>
							<TableTitle title={`${addDetail ? 'Add Company' : 'Company Details'}`} className='text-capitalize' />
							<div className='ibox-content'>
                                {addDetail && 
                                    <CompanyDetailForm
                                        loading={loading}
                                        handleSubmit={this.handleSubmit}
                                        handelReset={() => this.setState({ addDetail: false })}
                                    />
                                }

                                {!addDetail &&
                                    <CompanyDetailList
                                        companyDetailList = {companyDetailList}
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
                                        <CompanyDetailModal
                                            companyDetail={companyDetailList[selectedCompany]}
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
        const companyDetailList = this.state.companyDetailList;
        companyDetailList.push(values)

        this.setState({ companyDetailList, addDetail: false })
    }

    changeActionType = (actionType: string, selectedCompany: string) => {
        this.setState({ isModalOpen: true, actionType, selectedCompany})
    }

    handleCloseModel = () => this.setState({ isModalOpen: false, actionType: ''});
}

export default withRouter(CompanyDetail);