// import Swal from "sweetalert2";

import Swal from "sweetalert2";

// const uploadImageBB = async (file) => {
//     try {

//         const formData = new FormData();
//         formData.append('image', file);
//         const url = `https://api.imgbb.com/1/upload?key=28cb272d13ac3475b30e35e4b39d5fa5"`;
//         const response = await fetch(url, {
//             method: "POST",
//             body: formData,
//         });

//         if (!response.ok) {
//             Swal.fire('Failed to upload image', '', 'error');
//             throw new Error('Failed to upload image');
//         }

//         const imageData = await response.json();
//         console.log(imageData);

//         return imageData.display_url;
//     } catch (error) {
//         console.error('Error uploading image:', error);
//         Swal.fire('Error uploading image', error.message, 'error');
//         return null; // Return null to indicate the upload failed
//     }
// };

const uploadImageBB = async (file) => {
    try {
        const formData = new FormData();
        formData.append('image', file);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=28cb272d13ac3475b30e35e4b39d5fa5`; // Replace YOUR_API_KEY with your actual key
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            Swal.fire('Failed to upload image', '', 'error');
            throw new Error('Failed to upload image');
        }

        const imageData = await response.json();
        return imageData.data.display_url; // Adjust based on ImgBB's API response structure
    } catch (error) {
        console.error('Error uploading image:', error);
        Swal.fire('Error uploading image', error.message, 'error');
        return null;
    }
};

export default uploadImageBB
