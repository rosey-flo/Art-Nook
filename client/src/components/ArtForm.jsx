import closeicon from 'bootstrap-icons/icons/x-circle.svg'

import { useMutation } from '@apollo/client'

import UploadWidget from './UploadWidget';

import { GET_USER_ARTWORK, GET_ALL_ARTWORK } from '../graphql/queries';
import { ADD_ARTWORK, UPDATE_ARTWORK } from '../graphql/mutations'



const ArtForm = ({
    setFormData,
    setShowForm,
    setIsEdit,
    formData,
    initialFormData,
    showForm,
    isEdit }) => {

    const [updateArtwork] = useMutation(UPDATE_ARTWORK, {
        variables: formData,
        onCompleted: () => {
            setFormData(initialFormData);  // Reset form data
            setShowForm(false)
        },

        refetchQueries: [GET_USER_ARTWORK, GET_ALL_ARTWORK]
    })

    const [addArtwork] = useMutation(ADD_ARTWORK, {
        variables: formData,
        onCompleted: () => {
            setFormData(initialFormData);  // Reset form data
            setShowForm(false)
        },
        onError: (error) => {
            console.error(error);
            setFormData(prevState => ({ ...prevState, errorMessage: error.message }));
        },
        refetchQueries: [GET_USER_ARTWORK, GET_ALL_ARTWORK]
    })

    const handleInputChange = event => {
        setFormData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = async event => {
        event.preventDefault()

        if (isEdit) {
            await updateArtwork()

            setIsEdit(false)

            return
        }
        await addArtwork();
    }

    const handleUpload = (error, result, widget) => {
        if (error) {
            setFormData(prevState => ({ ...prevState, errorMessage: error.message }));
            widget.close({ quiet: true });
            return;
        }
        setFormData(prevState => ({
            ...prevState,
            imageUrl: result.info.secure_url
        }));
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setFormData(initialFormData)

        setShowForm(false)

        setIsEdit(false)
    }

    return (
        <>
            {!showForm ? (
                //     {/* Cloudinary Widget */}

                <div className='d-flex align-items-center justify-content-center rounded mb-4 upload-widget'>
                    <UploadWidget onUpload={handleUpload}>
                        {({ open }) => {
                            function handleOnClick(e) {
                                e.preventDefault();
                                open();
                            }
                            return (
                                <button onClick={handleOnClick} className='btn upload-btn d-flex p-4 rounded'>
                                    Upload Artwork
                                </button>
                            )
                        }}
                    </UploadWidget>
                </div>

            ) : (
                <form className='artwork-form d-flex flex-column justify-content-center  mb-5'>

                    <button onClick={handleCloseForm} className="close-button">
                        <img src={closeicon} /></button>

                    <div className="d-flex flex-column mb-2">
                        <label className="form-label d-flex flex-column p-3 text-center">{isEdit ? 'Update information for your artwork:' : 'Enter some information about your artwork: '}</label>
                        <input className='input-group-text p-1 mx-5' onChange={handleInputChange} name="title" placeholder='artwork title' value={formData.title} type="text" />
                    </div>
                    <div className="d-flex flex-column mb-2">
                        <textarea className=' input-group-text p-1 mx-5' onChange={handleInputChange} name="description" placeholder='enter a description of your artwork' value={formData.description} type="text" />
                    </div>
                    <div className="d-flex flex-column mb-2">
                        <input className='input-group-text p-1 mx-5' onChange={handleInputChange} name="date" type="text" value={formData.date} placeholder="enter the date the piece was created" />
                    </div>

                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={handleSubmit} className="submit-button btn m-3">{isEdit ? 'Update' : 'Submit'}</button>
                    </div>
                </form>

                )}

        </>
    );
}


export default ArtForm;

