import React from 'react';

const News_Letter = () => {
    return (
        <div>
            <section className="py-12 bg-[#02091B] sm:py-16 lg:py-20 xl:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-base font-semibold text-blue-500">Subscribe for free</p>
                        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:mt-8">Subscribe to our newsletter & get the latest updates</h2>
                    </div>

                    <form action="#" method="POST" className="flex flex-col justify-between max-w-lg mx-auto mt-12 rounded-full sm:items-center sm:border sm:border-gray-700 sm:p-1 sm:flex-row sm:mt-16 sm:focus-within:border-blue-500 sm:focus-within:ring-1 sm:focus-within:ring-blue-500">
                        <div className="flex-1">
                            <label for="email" className="sr-only"> Email address </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address"
                                className="block w-full px-6 py-4 text-base font-normal text-white placeholder-gray-400 bg-transparent border border-gray-700 rounded-full focus:outline-none sm:border-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:focus:ring-0 sm:focus:border-transparent"
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full px-6 py-4 mt-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-sm sm:mt-0 sm:w-auto hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-gray-900"
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default News_Letter;