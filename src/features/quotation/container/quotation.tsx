import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { TableTitle } from 'shared/components/table';
import { firstLevelBreadcrumbs } from 'shared/constants/constants';
import Header from 'shared/components/header/header';
import PolicyDetailForm from '../component/quotationForm';
import Button from 'shared/components/form/button';
import QuotationDetailList from '../component/quotationList';
import Modal from 'shared/components/modal/modal';
import QuotationDetailModal from '../component/quotationDetailModal';

interface UIState {
    loading: boolean;
    addQuotation: boolean;
    quotationDetailList: any;
    isModalOpen: boolean;
    actionType: string;
    selectedQuotation: string;
}

class PolicyDetail extends Component<RouteComponentProps> {
    state: UIState = {
        loading: false,
        addQuotation: true,
        quotationDetailList: [],
        isModalOpen: false,
        actionType: '',
        selectedQuotation: '',
    }

    render () {
        const { loading, actionType, isModalOpen, addQuotation, quotationDetailList, selectedQuotation } = this.state
        return (
            <>
                <Header data={firstLevelBreadcrumbs} title={`${addQuotation ? 'View Quotation' : 'Quotation' }`}>
                {!addQuotation &&
                        <div className='breadcrumb-btn'>
                            <Button className='mr-2' btnType='primary' onClick={() => this.setState({ addQuotation: true })}>
                                View Quotation
                            </Button>
                        </div>
                    }
                </Header>
				<div className='row mt-3'>
					<div className='col-lg-12'>
						<div className='ibox float-e-margins'>
							<TableTitle title={`${addQuotation ? 'View Quotation' : 'Quotation' }`} className='text-capitalize' />
							<div className='ibox-content'>
                                {addQuotation &&
                                    <PolicyDetailForm
                                        loading={this.state.loading}
                                        handleSubmit={this.handleSubmit}
                                        handelReset={() => this.setState({ addQuotation: false })}
                                    />
                                }

                                {!addQuotation &&
                                    <QuotationDetailList
                                        quotationDetailList = {quotationDetailList}
                                        loading= {loading}
                                        changeActionType={this.changeActionType}
                                    />
                                }
                                
                                {actionType === 'view' && isModalOpen && 
                                    <Modal
                                        show={true}
                                        modalTitle='Quotation Detail'
                                        handleClose={this.handleCloseModel}
                                    >
                                        <QuotationDetailModal
                                            quotationDetail={quotationDetailList[selectedQuotation]}
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
        const quotationDetailList = this.state.quotationDetailList;
        quotationDetailList.push(values)

        this.setState({ quotationDetailList, addQuotation: false })
    }

    changeActionType = (actionType: string, selectedQuotation: string) => {
        this.setState({ isModalOpen: true, actionType, selectedQuotation})
    }

    handleCloseModel = () => this.setState({ isModalOpen: false, actionType: ''});
}

export default withRouter(PolicyDetail);