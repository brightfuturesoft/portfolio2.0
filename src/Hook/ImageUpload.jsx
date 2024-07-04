// useImageUpload.js

import Swal from "sweetalert2";

const uploadImage = async (file) => {
    try {

        const formData = new FormData();
        formData.append('image', file);
        const url = `http://localhost:5010/api/v1/image/upload-image`;
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            Swal.fire('Failed to upload image', '', 'error');
            throw new Error('Failed to upload image');
        }

        const imageData = await response.json();

        return imageData.image_url;
    } catch (error) {
        console.error('Error uploading image:', error);
        Swal.fire('Error uploading image', error.message, 'error');
        return null; // Return null to indicate the upload failed
    }
};

export default uploadImage;
