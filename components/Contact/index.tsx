"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState<string>('');

  // Refs for input elements to set custom validity messages
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear custom validity message when user modifies the input
    e.target.setCustomValidity('');
  };

  const validateForm = () => {
    // Custom validation logic
    if (nameRef.current && !formData.name) {
      nameRef.current.setCustomValidity('Full name is required');
    }
    if (emailRef.current && !formData.email) {
      emailRef.current.setCustomValidity('Email address is required');
    } else if (emailRef.current && !emailRef.current.validity.valid) {
      emailRef.current.setCustomValidity('Please enter a valid email address');
    }
    if (subjectRef.current && !formData.subject) {
      subjectRef.current.setCustomValidity('Subject is required');
    }
    if (phoneRef.current && !formData.phone) {
      phoneRef.current.setCustomValidity('Phone number is required');
    } else if (phoneRef.current && !phoneRef.current.validity.valid) {
      phoneRef.current.setCustomValidity('Please enter a valid Indian phone number (10 digits starting with 6, 7, 8, or 9)');
    }
    if (messageRef.current && !formData.message) {
      messageRef.current.setCustomValidity('Message is required');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    validateForm();

    // Check if the form is valid before submitting
    const formElement = e.currentTarget as HTMLFormElement;
    if (!formElement.checkValidity()) {
      formElement.reportValidity(); // Trigger browser's built-in validation UI
      return;
    }

    // Use EmailJS to send the email
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Replace with your EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Replace with your EmailJS Template ID
        formData as any,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID! // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          setResponseMessage('Your enquiry has been sent successfully!');
          setFormData({ name: '', email: '', subject: '', phone: '', message: '' }); // Clear the form
        },
        (error) => {
          setResponseMessage('Failed to send your enquiry. Please try again later.');
        }
      );
  };

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                    ref={nameRef}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    ref={emailRef}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    ref={subjectRef}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    pattern="[6-9]{1}[0-9]{9}" // Pattern for Indian mobile numbers
                    required
                    ref={phoneRef}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    required
                    ref={messageRef}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between">
                  <button
                    aria-label="send message"
                    type="submit"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {responseMessage && <p>{responseMessage}</p>}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Our Location
                </h3>
                <p>
                  <a href="https://maps.app.goo.gl/1P47pDStxNbVakrHA">2nd Floor, 226, in front of Books N Books, Zone-II, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462021</a>
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.422003422197!2d77.43416437576288!3d23.227725779030532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44f732f4e21b7a7f%3A0xfcb34b3ba8d75d5f!2sTech%20Unicorn%20Academy!5e0!3m2!1sen!2sin!4v1725765963759!5m2!1sen!2sin" width="" height="" style={{ border:0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="mailto:hr@techunicornacademy.com">hr@techunicornacademy.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="tel:+91-9174859935">+91-9174859935</a>
                </p>
                <p>
                  <a href="tel:+91-7554514721">+91-7554514721</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
