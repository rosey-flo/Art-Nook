import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../graphql/mutations';

const ProfileUpdateForm = ({ user }) => {
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        password: ''
    });

    const [updateUser] = useMutation(UPDATE_USER)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await updateUser({
                variables: {
                    id: user.id,
                    username: formData.username
                }
            });
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className='d-flex flex-column align-items-center my-3'>
            <form className='update-form'>
                <p className='basicfont white-font my-3'>Update your username:</p>
                <input className='form-control my-5' type="text" name="username" value={formData.username} onChange={handleChange} />
                {/* <input type="email" name="email" value={formData.email} onChange={handleChange} /> */}
                {/* <input type="password" name="password" value={formData.password} onChange={handleChange} /> */}
                <div className='d-flex justify-content-center'>
                    <button className='update-username btn p-3' type="submit" onSubmit={handleSubmit}>Update</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileUpdateForm;