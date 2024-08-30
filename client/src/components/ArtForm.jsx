import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { useState } from 'react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

import UploadWidget from './UploadWidget';

const initialFormData = {
    title: '',
    description: '',
    imageUrl: '',
    date: '',
    errorMessage: ''
}

const ArtForm = () => {
    const [formData, setFormData] = useState(initialFormData);

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
            <form>
                <div className="mb-3">
                    <label className="form-label">Artwork Title</label>
                    <input type="text" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Month & Year Art was Created:</label>
                    <input type="text" placeholder="MM/YYYY" />
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


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default ArtForm;