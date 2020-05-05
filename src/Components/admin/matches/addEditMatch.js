import React, { Component } from 'react';
import AdminLayout from '../../../HOC/AdminLayout'

import FormField from '../../ui/formFields'
import { validate } from '../../ui/misc'

class AddEditMatch extends Component {

    state = {
        matchId: '',
        formType: '',
        formError: false,
        formSuccess: '',
        teams:[],
        formData: {
            date: {
                element: 'input',
                value: '',
                config: {
                    label: 'Event date',
                    name: 'date_input',
                    type: 'date',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            local: {
                element: 'select',
                value: '',
                config: {
                    label: 'Select a local team',
                    name: 'select_local',
                    type: 'select',
                    options: []
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: false
            },
            resultLocal: {
                element: 'input',
                value: '',
                config: {
                    label: 'Result local',
                    name: 'result_local_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: false
            },
            away: {
                    element: 'select',
                    value: '',
                    config: {
                        label: 'Select an away team',
                        name: 'select_away',
                        type: 'select',
                        options: []
                    },
                    validation: {
                        required: true,
                    },
                    valid: false,
                    validationMessage: '',
                    showlabel: false
                },
            resultAway: {
                element: 'input',
                value: '',
                config: {
                    label: 'Result away',
                    name: 'result_away_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: false
            },
            referee: {
                element: 'input',
                value: '',
                config: {
                    label: 'Referee',
                    name: 'referee_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            stadium: {
                element: 'input',
                value: '',
                config: {
                    label: 'Stadium',
                    name: 'stadium_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            result: {
                element: 'select',
                value: '',
                config: {
                    label: 'Team result',
                    name: 'select_result',
                    type: 'select',
                    options: [
                        {key: 'W', value: 'W'},
                        {key: 'L', value: 'L'},
                        {key: 'D', value: 'D'},
                        {key: 'n/a', value: 'n/a'},
                    ]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            final: {
                element: 'select',
                value: '',
                config: {
                    label: 'Game played',
                    name: 'select_played',
                    type: 'select',
                    options: [
                        { key: 'Yes',value: 'Yes' },
                        { key: 'No',value: 'No' },
                    ]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
        }
    }
    
    render() {
        return (
            <AdminLayout>
                <div className='editmatch_dialog_wrapper'>
                    <h2>
                        {this.state.formType}
                    </h2>
                
                    <div>
                        <form onSubmit={(event)=> this.submitForm(event)}>

                            <FormField
                                id={'date'}
                                formdata={this.state.formData.date}
                                change={(element) => this.updateForm(element)}
                                /> 


                            <div className='select_team_layout'>
                                <div className='label_inputs'>Local</div>
                                <div className='wrapper'>
                                    <div className='left'>
                                        <FormField
                                            id={'local'}
                                            formdata={this.state.formData.local}
                                            change={(element) => this.updateForm(element)}
                                        /> 
                                    </div>
                                    <div>
                                        <FormField
                                            id={'resultLocal'}
                                            formdata={this.state.formData.resultLocal}
                                            change={(element) => this.updateForm(element)}
                                        /> 
                                    </div>
                                </div>
                            </div>

                            <div className='select_team_layout'>
                                <div className='label_inputs'>Away</div>
                                <div className='wrapper'>
                                    <div className='left'>
                                        <FormField
                                            id={'away'}
                                            formdata={this.state.formData.away}
                                            change={(element) => this.updateForm(element)}
                                        /> 
                                    </div>
                                    <div>
                                        <FormField
                                            id={'resultAway'}
                                            formdata={this.state.formData.resultAway}
                                            change={(element) => this.updateForm(element)}
                                        /> 
                                    </div>
                                </div>
                            </div>

                            <div className='split_fields'>
                                <FormField
                                    id={'referee'}
                                    formdata={this.state.formData.referee}
                                    change={(element) => this.updateForm(element)}
                                /> 

                                <FormField
                                    id={'stadium'}
                                    formdata={this.state.formData.stadium}
                                    change={(element) => this.updateForm(element)}
                                /> 
                            </div>

                            <div className='split_fields_last'>
                                <FormField
                                    id={'result'}
                                    formdata={this.state.formData.result}
                                    change={(element) => this.updateForm(element)}
                                /> 

                                <FormField
                                    id={'final'}
                                    formdata={this.state.formData.final}
                                    change={(element) => this.updateForm(element)}
                                /> 
                            </div>

                            <div className='success_label'>{this.state.formSuccess}</div>
                            {this.state.formError ? 
                            <div className='error_label'>
                                Something is wrong
                            </div>
                            :
                            null
                            }
                            <div className='admin_submit'>
                                <button onClick={(event) => this.submitForm(event)}>
                                    {this.state.formType}
                                </button>
                            </div>

                        </form>
                    </div>


                </div>
            </AdminLayout>
        );
    }
}

export default AddEditMatch;