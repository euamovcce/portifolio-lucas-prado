import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import profile from '../assets/profile.webp';
import likedinIcon from '../assets/linkedin-2.png';
import instaIcon from '../assets/instagram.png';
import emailIcon from '../assets/email-2.png';
import gitIcon from '../assets/email-2.png';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const templateId = JSON.parse(JSON.stringify(import.meta.env.VITE_EMAILJS_TEMPLATE_ID));
    const serviceId = JSON.parse(JSON.stringify(import.meta.env.VITE_EMAILJS_SERVICE_ID));
    const userId = JSON.parse(JSON.stringify(import.meta.env.VITE_EMAILJS_USER_ID));

    if (form.current) {

      if (form.current.checkValidity()) {
        emailjs.sendForm(serviceId, templateId, form.current, userId)
          .then(
            (result) => {
              console.log(result.text);
              console.log('message sent');
              setIsSubmitted(true);
              setIsError(false);
              (e.target as HTMLFormElement).reset();
              setTimeout(() => {
                setIsSubmitted(false);
              }, 10000);
            },
            (error) => {
              console.log(error.text);
              setIsError(true);
              setTimeout(() => {
                setIsError(false);
              }, 10000);
            }
          );
      }
    } else {
      setIsCaptchaVerified(false);
      if (form.current) {
        setIsError(true);
        console.log('error');
        console.log(form.current);
        console.log(isCaptchaVerified);
      }
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setIsCaptchaVerified(true);
    } else {
      setIsCaptchaVerified(false);
    }
  };

  return (
    <div className="flex justify-around items-center p-5 bg-zinc-900 max-lg:flex-col-reverse ">
      <div>
        <img src={profile} width={400} alt="photo Lucas Prado" />
      </div>
      <div className="w-full max-w-lg">

        <form
          className="flex flex-col gap-3 mb-4 mx-5"
          ref={form}
          onSubmit={sendEmail}
        >
          {isSubmitted && (
            <div className="flex justify-between bg-green-100 rounded-sm font-Montserrat font-normal text-zinc-900 border border-green-300 px-4 py-1">
              <p>Thank you for your message!</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="font-semibold text-green-600"
              >
                X
              </button>
            </div>
          )}

          {isError && (
            <div className="flex justify-between bg-red-100 rounded-sm font-Montserrat font-normal text-zinc-900 border border-red-300  px-4 py-1">
              <p>Please try again later.</p>
              <button
                onClick={() => setIsError(false)}
                className="font-semibold text-red-600"
              >
                X
              </button>
            </div>
          )}
          <h1 className="text-white text-xl font-Montserrat font-semibold ">
            Send a message
          </h1>
          <label htmlFor="user_name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Name"
            className="bg-white border rounded-md p-2 placeholder-gray-600 text-black"
            required
          />
          <label htmlFor="user_email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="Email"
            className="bg-white border rounded-md p-2 placeholder-gray-600 text-black"
            required
          />
          <label htmlFor="user_company" className="sr-only">
            Company or Service
          </label>
          <input
            type="text"
            id="user_company"
            name="user_company"
            placeholder="Company or Service"
            className="bg-white border rounded-md p-2 placeholder-gray-600 text-black"
          />
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="bg-white border rounded-md p-2 placeholder-gray-600 text-black"
            required
          />


          <ReCAPTCHA
            sitekey={JSON.parse(JSON.stringify(import.meta.env.VITE_RECAPTCHA_SITE_KEY))}
            onChange={handleCaptchaChange}
            theme='dark'
            size='invisible'
          />

          <input
            type="submit"
            value="Send"
            className="p-3 text-xl font-Montserrat font-normal bg-red-400/95 rounded-md"
          />
        </form>

        <div className="grid grid-cols-3 mx-5 max-sm:flex max-sm:justify-between">
          <a
            href="https://www.instagram.com/lucas.praado/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Lucas Prado's Instagram"
          >
            <div className="flex gap-3 p-2 rounded-md items-center">
              <img src={instaIcon} alt="Instagram Icon" />
              <h3 className="font-Montserrat font-medium text-base max-sm:hidden">
                Instagram
              </h3>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-praado/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Lucas Prado's LinkedIn"
          >
            <div className="flex gap-3 p-2 rounded-md items-center">
              <img src={likedinIcon} alt="LinkedIn Icon" />
              <h3 className="font-Montserrat font-medium text-base max-sm:hidden">
                LinkedIn
              </h3>
            </div>
          </a>
          <a
            href="mailto:vinicius.praado@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Send e-mail to Lucas Prado's"
          >
            <div className="flex gap-3 p-2 rounded-md items-center">
              <img src={emailIcon} alt="Email Icon" />
              <h3 className="font-Montserrat font-medium text-base max-sm:hidden">E-mail</h3>
            </div>
          </a>
          <a
            href="https://github.com/euamovcce"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Lucas Prado's GitHub"
          >
            <div className="flex gap-3 p-2 rounded-md items-center">
              <img src={gitIcon} alt="GitHub Icon" />
              <h3 className="font-Montserrat font-medium text-base max-sm:hidden">GitHub</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
