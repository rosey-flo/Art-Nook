import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { useState } from 'react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import {useMutation} from '@apollo/client'

import UploadWidget from './UploadWidget';
import {ADD_ARTWORK, DELETE_ARTWORK} from '../graphql/mutations'

const initialFormData = {
    title: '',
    description: '',
    imageUrl: '',
    date: '',
    errorMessage: ''
}

const ArtForm = () => {
    const [formData, setFormData] = useState(initialFormData);
		const [addArtwork] = useMutation(ADD_ARTWORK, {
			    variables: formData,
			    // refetchQueries: [GET_USER_ARTWORK, GET_ALL_ARTWORK]
			})

		const handleInputChange = event => {
			
			setFormData({
				...formData,
				[event.target.name]: event.target.value
			})
		}

		const handleSubmit = async event => {
			console.log(formData)
			event.preventDefault()

			const res = await addArtwork();

			console.log(res)

			// setFormData({
			// 	...initialFormData
			// })
		}

    const handleUpload = (error, result, widget) => {
        if (error) {
            // updateError(error);
            console.log(error)

            setFormData({
                ...formData,
                errorMessage: error.message
            })

            widget.close({
                quiet: true
            });

            return;
        }

        setFormData({
            ...formData,
            imageUrl: result.info.secure_url
        })

    };

    return (
        <>
            <form >
                <div className="mb-3">
                    <label className="form-label">Artwork Title</label>
                    <input onChange={handleInputChange} name="title" value={formData.title} type="text" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input onChange={handleInputChange} name="description" value={formData.description} type="text" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Month & Year Art was Created:</label>
                    <input onChange={handleInputChange} name="date" type="text" value={formData.date} placeholder="MM/YYYY" />
                </div>

                {/* Cloudinary Widget */}
                
								<div>
                    <UploadWidget onUpload={handleUpload}>
                        {({ open }) => {
                            function handleOnClick(e) {
                                e.preventDefault();
                                open();
                            }
                            return (
                                <button onClick={handleOnClick}>
                                    Upload an Image
                                </button>
                            )
                        }}
                    </UploadWidget>
                </div>


                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>

						
        </>
    );
};

export default ArtForm;