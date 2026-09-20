


const OurMap = () => {
  const location =
    "https://www.google.com/maps?q=Dr%20Misbah%20Dental%20Clinic%20Addis%20Ababa&output=embed";

  return (
    <section>
      <div className="px-4 lg:px-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Find Us on the Map
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are located at Dr Misbah Dental Clinic, Addis Ababa, Ethiopia.
            Use the map below to locate us.
          </p>
        </div>

        <div className="relative w-full h-[500px] overflow-hidden shadow-2xl">
          <iframe
            src={location}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr Misbah Dental Clinic Location"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMap;
