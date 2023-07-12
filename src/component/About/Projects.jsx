export const OurProjects = () => {
  return (
    <div className="mb-16">
      <div >
      <h1 className="text-5xl text-center font-bold text-white mb-7">Our Workflow</h1>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center text-purple-600 font-semibold w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            20
            </div>
            <p className="font-bold tracking-wide text-gray-800">
             Complete Projects
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center text-purple-600 font-semibold justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              
            3
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Doing Projects
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center  text-purple-600 font-semibold w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              1
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Testing Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};