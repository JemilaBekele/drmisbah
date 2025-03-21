export const Benefits = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto py-24 px-6 lg:px-8">

        <div className="text-center mb-20">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-900 mb-4">
            What You Get from Working With Us
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Discover the unique benefits that come with our services, designed to bring you unparalleled value and a competitive edge.
          </p>
        </div>

        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {/* <!-- Customer-Centricity Benefit --> */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-white rounded-lg p-6 flex items-start">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-4">
                {/* <!-- Customer-Centricity Icon --> */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Customer-Centricity</h2>
                <p className="leading-relaxed text-base">
                  At the core of our business, we prioritize your needs, ensuring personalized solutions and exceptional service at every touchpoint.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Innovation Benefit --> */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-white rounded-lg p-6 flex items-start">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-4">
                {/* <!-- Innovation Icon --> */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l7-7 7 7-7 7-7-7z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Innovation</h2>
                <p className="leading-relaxed text-base">
                  Stay ahead with our cutting-edge solutions, leveraging the latest technology to drive growth and efficiency in your business.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Reliability Benefit --> */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-white rounded-lg p-6 flex items-start">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mr-4">
                {/* <!-- Reliability Icon --> */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3 4-4-3-3-4 4V8z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Reliability</h2>
                <p className="leading-relaxed text-base">
                  Depend on our proven track record of delivering consistent results, ensuring that we meet and exceed your expectations every time.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Expertise Benefit --> */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-white rounded-lg p-6 flex items-start">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mr-4">
                {/* <!-- Expertise Icon --> */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Expertise</h2>
                <p className="leading-relaxed text-base">
                  Benefit from our wealth of experience and industry knowledge, empowering your business to thrive and succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>






  );
};
