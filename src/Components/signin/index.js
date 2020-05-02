import React, { Component } from 'react'
import FormField from '../ui/formFields'
import { validate } from '../ui/misc'

class SignIn extends Component {

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
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your Password'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            }
        }
    }


    submitForm() {

    }


    render() {
        return (
            <div className='container'>
               <div className='signin_wrapper' style={{margin: '100px'}}>

                    <form onSubmit={(event) => this.submitForm()}>

                        <h2>Please Login</h2>

                    </form>
               </div>
            </div>
        )
    }
}

export default SignIn