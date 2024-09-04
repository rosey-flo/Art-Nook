import { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import { useNavigate } from 'react-router-dom'

import { LOGIN_USER, REGISTER_USER } from "../graphql/mutations"

const initialFormData = {
    username: '',
    email: '',
    password: '',
    errorMessage: '',
    isLogin: true
}


function AuthForm(props) {
    const [formData, setFormData] = useState(initialFormData)
    const [loginUser] = useMutation(LOGIN_USER, {
        variables: formData
    })
    const [registerUser] = useMutation(REGISTER_USER, {
        variables: formData
    })

    const navigate = useNavigate();

    const toggleForm = (newValue) => {
        setFormData({
            ...FormData,
            errorMessage: '',
            isLogin: newValue
        })
    }

    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async event => {
        event.preventDefault()

        try {

            let res;
            if (formData.isLogin) {
                res = await loginUser()
                props.setUser(res.data.loginUser.user)
            } else {
                res = await registerUser()
                props.setUser(res.data.registerUser.user)
            }



            navigate('/dashboard')

        } catch (error) {
            setFormData({
                ...formData,
                errorMessage: error.message
            })
        }


    }

    return (
        <>

            <form onSubmit={handleSubmit} className="authform d-flex flex-column mt-3">
                <h2 className="text-center basicfont white-font">{formData.isLogin ? 'Login' : 'Register'} </h2>

                {formData.errorMessage && <p className="error-message text-center">{formData.errorMessage}</p>}

                {!formData.isLogin && <input onChange={handleInputChange} name="username" type="text" placeholder="username" />}

                <input onChange={handleInputChange} name="email" type="email" placeholder="email" autoComplete="email" />
                <input onChange={handleInputChange} name="password" type="password" placeholder="enter password" autoComplete="current-password" />

                <button className="my-3">Submit</button>

                {formData.isLogin ? (
                    <p className="text-center white-font">Need to Register? <span onClick={() => toggleForm(false)}>Click Here</span> </p>
                ) : (
                    <p className="text-center white-font">Already Registered? <span onClick={() => toggleForm(true)}>Click Here</span> </p>
                )}

            </form>

        </>
    )
}

export default AuthForm
