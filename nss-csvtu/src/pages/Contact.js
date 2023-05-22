import React, { useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
  
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

  //   const isValidEmail = email => {
  //     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return regex.test(String(email).toLowerCase());
  // };
 
    const submit = () => {
      if (name && email && message ) {
         // send mail
         const serviceId = `${process.env.REACT_APP_SERVICE_ID}`;
         const templateId = `${process.env.REACT_APP_TEMPLATE_ID}`;
         const userId = `${process.env.REACT_APP_USER_ID}`;
         const templateParams = {
             name,
             email,
             message
         };

         emailjs.send(serviceId, templateId, templateParams, userId)
             .then(response => console.log(response))
             .then(error => console.log(error));

          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
          console.log(emailSent)

      } else {
          alert('Please fill in all fields.');
      }
  }
  // console.log(emailSent);
  return (
    <div className="">
      <section className="text-gray-600 body-font relative">
        <div className="text-center text-4xl font-bold underline">
          <p className="m-3 "> CONTACT US</p>
        </div>
        <div className="bg-blue-200 m-5 container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute filter inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3568306289117!2d81.36144161401806!3d21.138193189411414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29249845000007%3A0xae9660fbcd26d492!2sChhattisgarh%20Swami%20Vivekanand%20Technical%20University%20Bhilai!5e0!3m2!1sen!2sin!4v1635767352265!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-gray-400 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Newai, P.O.-Newai, District- Durg (Chhattisgarh), PIN-491107{" "}
                </p>
                <p> INDIA</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-800 leading-relaxed">
                  nss@csvtu.ac.in
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+91-788-2445032</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 border-black border-2 p-3  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Please fill in the form below to contact us to through mail:
            </p>
           
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name" value={name} onChange={e => setName(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button onClick={submit} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
            {/* <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span> */}
            
            <p className="text-xs text-gray-500 mt-3">
              CHHATTISGARH SWAMI VIVEKANAND TECHNICAL UNIVERSITY.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
