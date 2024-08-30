import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { useState } from 'react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

import UploadWidget from './UploadWidget';

const ArtForm = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleUpload = (error, result, widget) => {
        if (error) {
            // updateError(error);
            console.log(error)
            widget.close({
                quiet: true
            });

            return;
        }
        console.log(result)
    };

    return (
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
    );
};

export default ArtForm;