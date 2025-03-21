


const OurMap = () => {
  const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.78912345678!2d38.7991911!3d9.0012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85fbd2ed7267%3A0xbb12a87bd17aa9aa!2sAlfoz%20Plaza%20%7C%20Gerji!5e0!3m2!1sen!2set!4v1709876543210";

  return (
    <section >
      <div className="   px-4 lg:px-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Find Us on the Map
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are located around Alfoz Plaza, Gerji, Addis Ababa, Ethiopia. Use the map below to locate us.
          </p>
        </div>
        <div className="relative w-full h-[500px] overflow-hidden shadow-2xl">
          <iframe
            src={location}
            className="w-full h-full border-0"
            allowFullScreen
            title="Our Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default OurMap;
