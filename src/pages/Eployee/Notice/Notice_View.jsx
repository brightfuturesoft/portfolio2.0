import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Notice_View = () => {

    const notice_data = useLoaderData()
    const notice = notice_data.data

    return (
        <div>
            <section class="py-12  sm:py-16 lg:py-20 ">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-5xl mx-auto">
                        <div class="">
                            <h1 class="text-4xl font-bold text-gray-100 sm:text-4xl">{notice?.subject}</h1>
                            <p class="mt-6 text-2xl  font-medium text-gray-300">{new Date(notice?.notice_date).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        </div>

                        <div class="mt-12 sm:mt-16">
                            {/* <aside class="lg:col-span-4 lg:order-last lg:self-start lg:sticky lg:top-8">
                                <div class="overflow-hidden bg-white border border-gray-200">
                                    <div class="px-4 py-5 sm:p-6">
                                        <h4 class="text-xs font-bold tracking-widest text-gray-400 uppercase">On this page</h4>

                                        <ul class="mt-8 space-y-5">
                                            <li>
                                                <a href="#" title="" class="flex text-base font-bold text-gray-500 hover:underline"> What is growth hack? </a>
                                            </li>

                                            <li>
                                                <a href="#" title="" class="flex text-base font-bold text-gray-900 hover:underline"> How to start growing business? </a>
                                            </li>

                                            <li>
                                                <a href="#" title="" class="flex text-base font-bold text-gray-500 hover:underline"> 5 easy hacks to get started </a>
                                            </li>

                                            <li>
                                                <a href="#" title="" class="flex text-base font-bold text-gray-500 hover:underline"> Growth hacking in 2022 </a>
                                            </li>

                                            <li>
                                                <a href="#" title="" class="flex text-base font-bold text-gray-500 hover:underline"> Conclusion </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside> */}

                            <article
                                dangerouslySetInnerHTML={{
                                    __html: notice.body,
                                }}
                                class="mt-12 prose lg:mt-0 lg:prose-lg lg:col-span-8 prose-blockquote:lg:text-xl prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:border-none prose-blockquote:text-lg prose-blockquote:leading-8 prose-blockquote:p-0 prose-blockquote:lg:p-0 prose-blockquote:font-medium prose-blockquote:text-gray-900"
                            >

                            </article>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Notice_View;