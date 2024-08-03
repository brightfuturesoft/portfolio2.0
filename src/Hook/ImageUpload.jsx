// useImageUpload.js

import Swal from "sweetalert2";
import { base_url } from "../layout/Title";

const uploadImage = async (file) => {
    try {

        const formData = new FormData();
        formData.append('image', file);
        const url = `${base_url}/image/upload-image`;
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
