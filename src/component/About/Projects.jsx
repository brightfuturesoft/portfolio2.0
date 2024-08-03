export const OurProjects = () => {
  return (
    <section class="py-12  sm:py-16 lg:py-16 xl:py-16">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-xl mx-auto text-center">
          <h2 class="text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">Our achievements</h2>
          {/* <p class="mt-4 text-base font-normal leading-7 text-gray-300 lg:text-lg lg:mt-6 lg:leading-8">Clarity gives you the blocks & components you need to create a truly professional website for your SaaS and gives the blocks.</p>
        </div> */}
        </div>

        <div class="relative max-w-2xl mx-auto mt-12 overflow-hidden bg-blue-600 sm:mt-16 lg:max-w-3xl xl:max-w-none rounded-2xl">
          <div class="absolute top-0 left-0 -translate-x-2/3 -translate-y-[75%]">
            <div class="border-[8px] border-white rounded-full w-80 h-80 opacity-20 lg:opacity-100"></div>
          </div>

          <div class="absolute bottom-0 right-0 translate-x-1/3 translate-y-[85%]">
            <div class="border-[8px] border-white rounded-full w-80 h-80 opacity-20 lg:opacity-100"></div>
          </div>

          <div class="relative px-8 py-12 lg:px-12 lg:py-16 xl:py-20">
            <div class="grid grid-cols-1 gap-8 md:first-letter:gap-12 xl:gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <div class="flex items-center">
                <p class="w-24 text-5xl font-semibold tracking-tight text-white xl:w-auto shrink-0">48</p>
                <h3 class="ml-5 text-base font-normal leading-tight w-28 text-blue-200">Satisfied Global Clients</h3>
              </div>

              <div class="flex items-center">
                <p class="w-24 text-5xl font-semibold tracking-tight text-white xl:w-auto shrink-0">78</p>
                <h3 class="ml-5 text-base font-normal leading-tight w-20 text-blue-200">Doing Projects</h3>
              </div>

              <div class="flex items-center">
                <p class="w-24 text-5xl font-semibold tracking-tight text-white xl:w-auto shrink-0">2</p>
                <h3 class="ml-5 text-base font-normal leading-tight w-28 text-blue-200">Testing Projects</h3>
              </div>

              <div class="flex items-center">
                <p class="w-24 text-5xl font-semibold tracking-tight text-white xl:w-auto shrink-0">15</p>
                <h3 class="ml-5 text-base font-normal leading-tight w-28 text-blue-200"> Complete Projects</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};