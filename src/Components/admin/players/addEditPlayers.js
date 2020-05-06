import React, { Component } from 'react';
import AdminLayout from '../../../HOC/AdminLayout'

import FormField from '../../ui/formFields'
import { validate } from '../../ui/misc'

import { firebasePlayers, firebaseDB, firebase} from '../../../firebase'



class AddEditPlayers extends Component {

    state = {
        playerId: '',
        formType: '',
        formError: false,
        formSuccess: '',
        defaultImg: '',
        formData: {
            name: {
                element: 'input',
                value: '',
                config: {
                    label: 'Player name',
                    name: 'name_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            lastname: {
                element: 'input',
                value: '',
                config: {
                    label: 'Player Last name',
                    name: 'lastname_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            number: {
                element: 'input',
                value: '',
                config: {
                    label: 'Player number',
                    name: 'number_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            position: {
                element: 'select',
                value: '',
                config: {
                    label: 'Select a position',
                    name: 'select_position',
                    type: 'select',
                    options: [
                        {key: 'Keeper', value: 'Keeper'},
                        {key: 'Defense', value: 'Defense'},
                        {key: 'Midfield', value: 'Midfield'},
                        {key: 'Striker', value: 'Striker'}
                    ]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            }
        }
    }

    componentDidMount() {
        const playerId = this.props.match.params.id

        if(!playerId){
            this.setState({
                formType: "Add Player"
            })
        } else {

        }
    }

    updateForm(element) {
        const newFormdata = {...this.state.formData} 
        const newElement = {...newFormdata[element.id]}

        newElement.value = element.event.target.value 
        newFormdata[element.id] = newElement
        
        let valiData = validate(newElement)

        newElement.valid = valiData[0]
        newElement.validationMessage = valiData[1]

        this.setState({
            formError: false,
            formData: newFormdata
        })
    }


    submitForm(event) {
        event.preventDefault()

        let dataToSubmit = {}
        let formIsValid = true 

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value
            formIsValid = this.state.formData[key].valid && formIsValid
        }

        if(formIsValid) {
            // submit form
        } else {
            this.setState({
                formError: true 
            })
        }

    }


    render() {
        return (
            <AdminLayout>
                <div className='editplayers_dialog_wrapper'>
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(event)=> this.submitForm(event)}>

                            <FormField
                                id={'name'}
                                formdata={this.state.formData.name}
                                change={(element) => this.updateForm(element)}
                                /> 

                            <FormField
                                id={'lastname'}
                                formdata={this.state.formData.lastname}
                                change={(element) => this.updateForm(element)}
                                /> 

                            <FormField
                                id={'number'}
                                formdata={this.state.formData.number}
                                change={(element) => this.updateForm(element)}
                                /> 

                            <FormField
                                id={'position'}
                                formdata={this.state.formData.position}
                                change={(element) => this.updateForm(element)}
                                /> 

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

export default AddEditPlayers;