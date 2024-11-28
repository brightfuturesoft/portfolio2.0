import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { base_url } from '../../layout/Title';
import { Link, useParams } from 'react-router-dom';
import uploadImageBB from '../../Hook/ImageBB';
import uploadImage from '../../Hook/ImageUpload';
import Swal from 'sweetalert2';
import { country_code } from './country_code';
import Select from 'react-select';




const ViewDetails = () => {

      const { id } = useParams();

      const [apply, setApply] = useState(false)

      const [selectedCode, setSelectedCode] = useState(country_code[0]);
      const [phoneNumber, setPhoneNumber] = useState(selectedCode.value);

      const handlePhoneChange = (e) => {
            const value = e.target.value;
            // Ensure the input does not remove the country code
            if (value.startsWith(selectedCode.value)) {
                  setPhoneNumber(value);
            } else {
                  setPhoneNumber(selectedCode.value + value.replace(selectedCode.value, ''));
            }
      };

      const handleCountryChange = (selectedOption) => {
            setSelectedCode(selectedOption);
            setPhoneNumber(selectedOption.value);
      };

      const { data: job_data = [], refetch, isLoading } = useQuery({
            queryKey: ["job_data"],
            queryFn: async () => {
                  const res = await fetch(
                        `${base_url}/job-post/get-job-by-id?job_post_id=${id}`,
                        {
                              headers: {
                                    'content-type': 'application/json',
                                    'author': 'bright_future_soft'
                              },
                              method: 'GET',
                        }
                  );
                  const data = await res.json();
                  return data.data;
            },
      });

      ;

      const [upload, setUpload] = useState(false)
      const [resume, setResume] = useState('')
      const [name, setName] = useState('')
      const upload_resume = async (e) => {

            const file = e.target.files[0]
            console.log(file);
            setResume(false)
            setUpload(true)
            const image = await uploadImage(file)
            setName(file.name)
            setResume(image)
            setUpload(false)


      }

      const apply_job_post = (e) => {
            e.preventDefault()
            setApply(true)
            const form = e.target
            const full_name = form.full_name.value
            const email_address = form.email_address.value
            const phone_number = selectedCode.value + form.phone_number.value
            const salary_expectation = form.salary_expectation.value
            const experience_in_years = form.experience_in_years.value
            const job_post_id = id
            const why = form.why.value


            const data = {
                  full_name,
                  email_address,
                  phone_number,
                  resume,
                  salary_expectation,
                  experience_in_years,
                  job_post_id,
                  why
            }

            console.log(data);

            fetch(`${base_url}/job-post/apply-job`, {
                  headers: {
                        'content-type': 'application/json',
                        'author': 'bright_future_soft'
                  },
                  method: 'POST',
                  body: JSON.stringify(data)
            }).then(res => res.json())
                  .then(data => {
                        if (data.success) {
                              Swal.fire(data.message, ' ', 'success')
                              setApply(false)
                        }
                        else {
                              Swal.fire(data.message, '', 'info')
                        }
                  })

      }

      const customSelectStyles = {
            container: (provided) => ({
                  ...provided,
            }),
            control: (provided) => ({
                  ...provided,
                  border: 'none',
                  boxShadow: 'none',
                  backgroundColor: 'white',
            }),
            dropdownIndicator: (provided) => ({
                  ...provided,
                  display: 'none', // Hide dropdown arrow
            }),
            indicatorSeparator: (provided) => ({
                  ...provided,
                  display: 'none', // Hide separator line
            }),
            placeholder: (provided) => ({
                  ...provided,
                  margin: 0,
            }),
            valueContainer: (provided) => ({
                  ...provided,
            }),
            singleValue: (provided) => ({
                  ...provided,
                  margin: 0,
                  padding: 0,
            }),
            menu: (provided) => ({
                  ...provided,
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }),
            option: (provided) => ({
                  ...provided,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
            }),
      };
      


      return (
            <div>
                  <section className="py-12 bg-gray-900 sm:py-16 lg:py-20">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                              <div className="max-w-3xl mx-auto xl:max-w-4xl mt-4">

                                    <h1 className="text-3xl font-bold text-gray-100 mt-7 sm:text-4xl xl:text-5xl font-pj">
                                          Job Title:  {job_data?.job_position}
                                    </h1>
                                    <p className=" font-semibold text-gray-100 mt-7 text-xl font-pj">
                                          Bright Future Soft is a startup software company dedicated to transforming the Bangladeshi software industry with innovative solutions. Join us in making a difference and be part of a team that values creativity, excellence, and growth.
                                    </p>
                                    <div className="mt-10">

                                          <svg
                                                className="w-auto h-4 text-gray-300"
                                                width={300}
                                                height={16}
                                                viewBox="0 0 344 16"
                                                fill="none"
                                                stroke="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                          >
                                                {Array.from({ length: 999 }, (_, i) => (
                                                      <line
                                                            key={i}
                                                            y1="-0.5"
                                                            x2="18.0278"
                                                            y2="-0.5"
                                                            transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${i * (3.0278 + 3)} 1)`}
                                                      />
                                                ))}
                                          </svg>


                                    </div>
                                    <div className="mt-10">
                                          <div

                                                className="text-white prose prose-invert max-w-none"
                                                dangerouslySetInnerHTML={{
                                                      __html: job_data?.description,
                                                }}
                                          />
                                    </div>
                                    <p className="text-xl font-bold text-white mt-7 sm:text-xl xl:text-xl font-pj">
                                          Applications Deadline: {new Date(job_data.dateline).toDateString()}
                                    </p>

                                    <div class="sm:col-span-2 mt-4">
                                          <button
                                                onClick={() => setApply(true)}
                                                type="button"
                                                class="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-black transition-all duration-200 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 hover:bg-gray-300"
                                          >
                                                APPLY FOR THIS POSITION
                                          </button>
                                    </div>
                                    {apply && <section class="py-20">
                                          <div className={apply ? "flex" : "hidden"}>
                                                <div className={`fixed  z-50 top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5  ${apply ? "block" : "hidden"
                                                      }`}>
                                                      <form onSubmit={apply_job_post} class="">
                                                            <div class="max-h-screen my-10">

                                                                  <div className="mt-6 overflow-hidden bg-gray-900 max-w-4xl mx-auto rounded-lg shadow md:mt-10">
                                                                        <div className="w-full max-w-[800px] h-[80vh] overflow-y-auto rounded-[20px] mt-4 text-start bg-white relative pb-10 px-8 md:px-[30px]">
                                                                              <div >
                                                                                    <button type='button'
                                                                                          onClick={() => {
                                                                                                setApply(false)
                                                                                                setName(false)
                                                                                                setResume(false)
                                                                                          }}
                                                                                          className='hover:bg-red-500 border absolute top-3 right-2 text-black cursor-pointer ml-3 bg-red-100 rounded-full w-8 h-8 flex justify-center items-center'>
                                                                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                                                    </button>
                                                                                    <p class="pt-6 text-base font-bold  text-gray-900">Personal Information</p>
                                                                                    <div class="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-x-6 gap-y-5 ">
                                                                                          <div>
                                                                                                <label for=""> Full Name </label>
                                                                                                <div class="block mt-2 w-full p-0.5  text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border  rounded-md caret-gray-900 focus:ring-gray-900  border-gray-500">
                                                                                                      <input type="text" name="full_name" id="" placeholder="" class="w-full px-4 py-2 border-none" />
                                                                                                </div>
                                                                                          </div>


                                                                                          <div>
                                                                                                <label className="block text-sm font-medium text-gray-700">Phone Number </label>
                                                                                                <div className="flex mt-2 w-full bg-white border rounded-md">
                                                                                                      <Select
                                                                                                            options={country_code}
                                                                                                            value={selectedCode}
                                                                                                            onChange={handleCountryChange}
                                                                                                            styles={customSelectStyles}
                                                                                                            className="flex-shrink-0"
                                                                                                            isSearchable={true} // Disable search functionality
                                                                                                      />
                                                                                                      <input
                                                                                                            type="text"
                                                                                                            name="phone_number"

                                                                                                            className="flex-1 px-4 py-2 border-none rounded-r-md"
                                                                                                            placeholder="Enter phone number"
                                                                                                      />
                                                                                                </div>
                                                                                          </div>
                                                                                          <div class="sm:col-span-2">
                                                                                                <label for=""> Email address </label>
                                                                                                <div class="block mt-2 w-full p-0.5  text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border  rounded-md caret-gray-900 focus:ring-gray-900 border-gray-500 ">
                                                                                                      <input type="text" name="email_address" id="" placeholder="" class="w-full px-4 py-2 border-none" />
                                                                                                </div>
                                                                                          </div>
                                                                                          <div>
                                                                                                <label for=""> Salary Expectation </label>
                                                                                                <div class="block mt-2 w-full p-0.5  text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border  rounded-md caret-gray-900 focus:ring-gray-900 border-gray-500 ">
                                                                                                      <input type="text" name="salary_expectation" id="" placeholder="" class="w-full px-4 py-2 border-none" />
                                                                                                </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                <label for=""> Work Experience in Years
                                                                                                </label>
                                                                                                <div class="block mt-2 w-full p-0.5  text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border  rounded-md caret-gray-900 focus:ring-gray-900 border-gray-500 ">
                                                                                                      <input type="text" name="experience_in_years" id="" placeholder="" class="w-full px-4 py-2 border-none" />
                                                                                                </div>
                                                                                          </div>

                                                                                          <div class="sm:col-span-2">
                                                                                                <label for="">Why do you think you are perfect for this position? </label>
                                                                                                <div class="mt-2 border  border-gray-500 block w-full p-1 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white   rounded-md ">
                                                                                                      <textarea type="text" name="why" id="" placeholder="" class="w-full px-4 py-3 border-none" />
                                                                                                </div>
                                                                                                <div class="bg-gray-100 max-w-4xl rounded-xl ">
                                                                                                      <div class="p-4 mt-4">
                                                                                                            <div class="sm:flex sm:items-center sm:justify-between">
                                                                                                                  <div class="flex items-center flex-1">
                                                                                                                        <div class="inline-flex items-center justify-center flex-shrink-0 bg-gray-400 rounded-full w-9 h-9 text-gray-50">
                                                                                                                              {resume ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg> :
                                                                                                                                    <>
                                                                                                                                          {upload ? <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin dark:border-violet-600">

                                                                                                                                          </div>


                                                                                                                                                : <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                                                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                                                                                                                </svg>}
                                                                                                                                    </>}
                                                                                                                        </div>
                                                                                                                        <Link to={resume} target="_blank" class="ml-3 text-base font-normal text-gray-900">{name ? name : 'Upload Your Resume '} </Link>
                                                                                                                  </div>

                                                                                                                  <div className="mt-4 sm:mt-0">
                                                                                                                        <label
                                                                                                                              htmlFor="file-upload"
                                                                                                                              className="inline-flex  cursor-pointer items-center px-4 py-2 text-sm font-bold text-gray-600 transition-all duration-200 border  rounded-md bg-gray-50 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-offset-2 focus:ring-gray-500"
                                                                                                                        >
                                                                                                                              {resume ? 'Uploaded' : 'Upload'}
                                                                                                                        </label>
                                                                                                                        <input

                                                                                                                              onChange={upload_resume}
                                                                                                                              id="file-upload"
                                                                                                                              type="file"
                                                                                                                              // accept=".pdf"
                                                                                                                              className="hidden"
                                                                                                                        />
                                                                                                                  </div>

                                                                                                            </div>
                                                                                                      </div>
                                                                                                </div>

                                                                                          </div>



                                                                                          <div class="sm:col-span-2">
                                                                                                <button
                                                                                                      type="submit"
                                                                                                      class="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                                                                                                >
                                                                                                      APPLY FOR THIS POSITION
                                                                                                </button>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </form>
                                                </div>

                                          </div>
                                    </section>}

                              </div>
                        </div >
                  </section >

            </div >
      );
};

export default ViewDetails;
