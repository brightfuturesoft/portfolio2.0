import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AdminBlogForm = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setFileName(file.name);
        }
    };


    const dataSubmit = (event) => {
        setLoading(true)
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const image = form.photo.files[0]
        const meta_tag = form.meta.value
        const message = form.message.value
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=67d84a709df3d1fecb8a6529b709dac5`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imageData) => {
                const image = imageData.data.url
                const blog = {
                    title,
                    meta_tag,
                    message,
                    img: image,
                }
                postBlog(blog, form)
            })
    }

    const postBlog = (blog, form) => {
        fetch(`http://localhost:5000/uplod-blog`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(blog),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                Swal.fire('Your Blog Publish Successfully', ' ', 'success')

                form.reset()
                setPreviewUrl('')
                setFileName('')
            })
    }


    return (
        <div className='py-20 bg-gray-900 text-white '>
            <div className=' mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

                <h1 className='text-2xl font-bold mt-10 text-center'>Publish a blog for you and next</h1>
                <div className='p-10 border-2 rounded-xl m-10' >
                    <form onSubmit={dataSubmit} className="space-y-4 text-black">
                        <div>
                            <label className="sr-only" htmlFor="title">
                                Title
                            </label>
                            <input required
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Title"
                                type="text"
                                id="title"
                                name='title'
                            />
                        </div>
                        <div>

                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center w-full  p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer  rounded-xl"
                            >
                                {previewUrl ? <img src={previewUrl} alt="File Preview" className="mt-2 w-8 h-8" /> :
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-8 h-8 text-gray-500 dark:text-gray-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                        />
                                    </svg>
                                }
                                <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                                    {fileName ? fileName : ' Upload Picture'}
                                </h2>
                                <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                                    Upload Your Photo Only.
                                </p>
                                <input required
                                    id="dropzone-file"
                                    type="file"
                                    name='photo'
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>

                            {/* Display the file preview */}

                        </div>
                        <div>
                            <label className="sr-only" htmlFor="title">
                                Meta tag
                            </label>
                            <input required
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Meta tag"
                                name='meta'
                                type="text"
                                id="meta"
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Message"
                                rows={8}
                                name='message'
                                id="message"

                            />
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                {loading ? 'Loading..' : 'Publish Blog'}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AdminBlogForm;