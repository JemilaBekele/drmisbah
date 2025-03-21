
import React from "react";

const OurMap = () => {
    return(
      
        <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
              <iframe
              className="w-full h-[500px]"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63044.974407223206!2d38.715821253812955!3d9.035377836464953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f8f0d1693f%3A0x28708ad53ebe65fb!2zVGVmZXJhIEJ1c2luZXNzIENlbnRlciB8IEhhYnRlIEdpeW9yZ2lzIHwg4Ymw4Y2I4YirIOGLqOGMiOGJoOGLqyDhiJvhi5XhiqjhiI0gfCDhiIDhiaXhibAg4YyK4Yuu4Yit4YyK4Yi1!5e0!3m2!1sen!2set!4v1710851825702!5m2!1sen!2set"
              allowFullScreen
              title="Google Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              key={Math.random()}

            >
            </iframe>
          </div>
        </div>
      </div>
    );
};
export default OurMap;