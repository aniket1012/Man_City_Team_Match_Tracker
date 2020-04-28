import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import FormField from '../../ui/formFields'
import { validate } from '../../ui/misc'

class Enroll extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your Email'
                },
                validation: {
                    required: true,
                    email: true,

                },
                valid: false,
                validationMessage:''
            }
        }
    }

    updateForm(element) {
        const newFormdata = {... this.state.formData} 
        const newElement = {...newFormdata[element.id]}

        newElement.value = element.event.target.value 
        newFormdata[element.id] = newElement
        
        let valiData = validate(newElement)

        newElement.valid = valiData[0]
        newElement.validationMessage = valiData[1]

        console.log(newFormdata);
        
        

        this.setState({
            formData: newFormdata
        })
    }


    submitForm() {

    }

    render() {
        return (
            <Fade>
                <div className='enroll_wrapper'>
                    <form onSubmit={(event) => {this.submitForm(event)}}>
                        <div className='enroll_title'>
                            Enter your email
                        </div>
                        <div className='enroll_input'>
                            <FormField
                                id={'email'}
                                formdata={this.state.formData.email}
                                change={(element) => this.updateForm(element)}
                            />
                        </div>
                    </form>
                </div>
                
            </Fade>
        )
    }
}

export default Enroll