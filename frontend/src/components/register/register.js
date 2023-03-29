import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { registerationValidation } from '../../validations'
import DateOfBirthSelector from './dateOfBirthSelector'
import GenderSelector from './genderSelector'
import RegisterInput from './registerInput'

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: '',
}
export default function Register() {
    const [registration, setRegistration] = useState(initialValues)
    const [dateError, setDateError] = useState("")
    const [genderError, setGenderError] = useState("")
    const getNumberOfDay = () => {
        return new Date(registration.bYear, registration.bMonth, 0).getDate()
    }
    const days = Array.from(new Array(getNumberOfDay()), (v, i) => 1 + i)
    const years = Array.from(new Array(108), (v, i) => initialValues.bYear - i);
    const months = Array.from(new Array(12), (v, i) => 1 + i);

    const handleRegisterChange = (e) => {
        const { name, value } = e.target
        setRegistration({ ...registration, [name]: value })
    }
    const handleSubmit =
        console.log("dateError", dateError)
    return (
        <div className='blur'>
            <div className='register'>
                <div className='register_header'>
                    <i className='exit_icon'></i>
                    <span>Sign Up</span>
                    <span>It's quick and easy</span>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={registration}
                    validationSchema={registerationValidation}
                    onSubmit={() => {
                        console.log("In here")``
                        const currentDate = new Date();
                        const pickedDate = new Date(registration.bYear, registration.bMonth + 1, registration.bDay)
                        const atLeast18 = new Date(1970 + 18, 0, 1)
                        const atLeast70 = new Date(1970 + 70, 0, 1)
                        if (currentDate - pickedDate < atLeast18) {
                            dateError("It looks like you are Underage or entered wrong Info .Please make sure that you use your real date of birth.")
                        } else if (currentDate - pickedDate > atLeast70) {
                            dateError("It looks like you are Overage or entered wrong Info .Please make sure that you use your real date of birth.")
                        } else if (registration.gender === "") {
                            setGenderError("Please choose a gender. You can change who can see this later.")
                        }
                    }}
                >
                    {
                        (formik) => (
                            <Form className='register_form'>
                                <div className='reg_line'>
                                    <RegisterInput
                                        type="text"
                                        placeholder={'First Name'}
                                        name="firstName"
                                        value={registration.firstName}
                                        onChange={handleRegisterChange}
                                    />
                                    <RegisterInput
                                        type="text"
                                        placeholder={'last Name'}
                                        name="lastName"
                                        value={registration.lastName}
                                        onChange={handleRegisterChange}
                                    />
                                </div>
                                <div className='reg_line1'>
                                    <RegisterInput
                                        type="email"
                                        placeholder={'Email address or Phone number'}
                                        name="email"
                                        value={registration.email}
                                        onChange={handleRegisterChange}
                                    />
                                    <RegisterInput
                                        type="password"
                                        placeholder={'Enter password'}
                                        name='password'
                                        value={registration.password}
                                        onChange={handleRegisterChange}
                                    />
                                </div>
                                <div className='reg_col'>
                                    <div className='reg_line_header'>
                                        Date of Birth <i className='info_icon'></i>
                                    </div>
                                    <DateOfBirthSelector
                                        bDay={registration.bDay}
                                        bMonth={registration.bMonth}
                                        bYear={registration.bYear}
                                        days={days}
                                        months={months}
                                        years={years}
                                        handleRegisterChange={handleRegisterChange}
                                        dateError={dateError}
                                    />
                                </div>
                                <div className='reg_col'>
                                    <div className='reg_line_header'>
                                        Gender <i className='info_icon'></i>
                                    </div>
                                    <GenderSelector
                                        handleRegisterChange={handleRegisterChange}
                                        genderError={genderError}
                                    />
                                </div>
                                <div className='reg_infos'>
                                    By Clicking Sign Up, you agree to our <span>Terms, Data Policy</span>and
                                    <span>Cookie Policy</span>.You may receive SMS notification from us and can opt out at any time.
                                </div>
                                <div className='reg_button_wrapper'>
                                    <button className='blue_btn open_signup' type='submit'>Sign Up</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}
